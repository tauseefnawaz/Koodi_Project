const User = require('../modelling/user');
const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Secret_Key = ';#aUQ!&6pN`4$sk+_C\Hp7"7*WW7AT9j2"sa?x4B*<a;Ye<\@q';


router.post('/register', async (req, res) => {
    try {
        const { username, Name, password, email, phoneNumber } = req.body;
        // validation
        if (!username || !Name || !password || !email || !phoneNumber)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        if (password.length < 8)
            return res.status(400).json({
                errorMessage: "Please enter a password of at least 8 characters.",
            });
        const existingUser = await User.findOne({ username });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this username already exists.",
            });
        const newUser = new User({
            username,
            Name,
            password,
            email,
            phoneNumber
        });

        const savedUser = await newUser.save();
        const token = jwt.sign(
            {
                user: savedUser._id,
            },
            Secret_Key
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })
            .send();

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }

});



router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        // validate
        if (!username || !password)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });

        const existingUser = await User.findOne({ username });
        if (!existingUser)
            return res.status(401).json({ errorMessage: "Wrong username" });
        
        const passwordCorrect = await User.findOne({ password });
        if (!passwordCorrect)
            return res.status(401).json({ errorMessage: "Wrong password." });

        // sign the token

        const token = jwt.sign(
            {
                user: existingUser._id,
            },
            Secret_Key
        );

        // send the token in a HTTP-only cookie

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            })
            .send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send();
});


















router.get('/show', async (req, res) => {
    try {
        const users = await UserModel.find();
        console.log(users);
        res.status(200).json(users);
    } catch {
        res.status(404).json("Error Message");

    }
});

router.get('/Create', async (req, res) => {
    const user = req.body;
    const NewUser = new UserModel(user);
    try {
        await UserModel.save();
        console.log(users);
        res.status(201).json(users);
    } catch {
        res.status(409).json("Error in User Creation");
    }
});

module.exports = router;