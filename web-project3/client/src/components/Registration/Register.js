import React, {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import '../Login/Login.css'
import axios from 'axios'
const initialState = {
    name:'',
    username:'',
    email: '',
    phoneNumber:'',
    password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)
    const {Name,username,email,phoneNumber, password, err, success} = user
    const history = useHistory();

    const isEmpty = value => {
        if(!value) return true
        return false
    }
    
    const isEmail = email => {
        // eslint-disable-next-line
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    const isLength = password => {
        if(password.length < 8) return true
        return false
    }

    const showErrMsg = (msg) => {
        return <div className="errMsg">{msg}</div>
    }
    const showSuccessMsg = (msg) => {
        return <div className="successMsg">{msg}</div>
    }
    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(Name) || isEmpty(username) || isEmpty(phoneNumber) || isEmpty(email) ||isEmpty(password))
            return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 8 characters.", success: ''})
            
        try { 

            const res = await axios.post('/user/register', {
                Name,username, email,phoneNumber, password
            })
            setUser({...user, err: '', success: res.data.msg})
            history.push("/login")
        } catch (err) {
            err.response.data.msg && setUser({...user, err: err.response.data.msg, success: ''})
            
        }
    }
    return (
        <div className="login_page">
            <h2>Registration</h2>

            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)} 

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username" id="email"
                    value={username} name="username" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Full Name ..." id="email"
                    value={Name} name="Name" onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="email">Phone Number</label>
                    <input type="text" placeholder="Enter Phone Number" id="email"
                    value={phoneNumber} name="phoneNumber" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit">Login</button>
                </div>
            </form>
            <p>Already an Account? <Link to="/login">login</Link></p>
        </div>
    )
}

export default Register