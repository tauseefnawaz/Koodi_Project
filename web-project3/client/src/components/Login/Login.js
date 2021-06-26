import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { dispatchedLogin } from '../../redux/actions/authAction'
import locksmith1 from  '../../images/locksmith1.png';

import {useDispatch} from 'react-redux'
const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}
function Login() {
    const [user, setUser] = useState(initialState)
    const {email, password, err, success} = user
    const dispatch  = useDispatch()
    const history = useHistory();

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
        try { 
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchedLogin())
            history.push("/")
        } catch (err) {
            console.log(err)
            err.response.data.msg && setUser({...user, err: err.response.data.msg, success: ''})
            
        }
    }
    return (
     
        <div className='login_page'>
            <img className="login_img" src={locksmith1} alt=''></img>
            <h2 className='login-h2v'>Login</h2>
                 {err && showErrMsg(err)}
             {success && showSuccessMsg(success)} 

             <form onSubmit={handleSubmit}>
                 <div>
                     <h5>Email Address</h5>
                     <input type="text" placeholder="Enter email address" id="email"
                     value={email} name="email" onChange={handleChangeInput} />
                 </div>

                 <div>
                 <h5>Password </h5>
                     <input type="password" placeholder="Enter password" id="password"
                     value={password} name="password" onChange={handleChangeInput} />
                 </div>

                 
                     <button className='login-button' type="submit">Login</button>
                 
             </form>
             <p>New Customer? <Link to="/register">Register</Link></p>
        </div>
        
    )
}

export default Login