const User = require('../modelling/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const {CLIENT_URL} = process.env
const userCtrl = {
    Register: async (req, res) => {
        try {
            const { Name,username, email, phoneNumber,password } = req.body;
            // validation
            
            if (!username || !Name || !password || !email || !phoneNumber)
                return res
                    .status(400)
                    .json({ errorMessage: "Please enter all required fields." });
            if (password.length < 8)
                return res.status(400).json({
                    errorMessage: "Please enter a password of at least 8 characters.",
                });
            const existingUser = await User.findOne({ email });
            if (existingUser)
                return res.status(400).json({
                    errorMessage: "An account with this username already exists.",
                });
            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new User({
                username,
                Name,
                password:passwordHash,
                email,
                phoneNumber
            });

            
            const savedUser = await newUser.save();

            const activation_token = createActivationToken({
                user: savedUser._id,
            })
            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            res.json({msg: "Register Success! Please activate your email to start."})
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    },
    
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const refresh_token = createRefreshToken({id: user._id})
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7 days
            })

            res.json({msg: "Login success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getAccessToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Please login now!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({msg: "Please login now!"})

                const access_token = createAccessToken({id: user.id})
                res.json({access_token})
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getUserInfor: async (req, res) => {
        try {
            console.log(req.user)
            const user = await User.findById(req.user.id).select('-password')
            console.log(user)
            
            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}



const createActivationToken = (payload)=>{
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}
module.exports = userCtrl