import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
    const auth = useSelector(state=>state.auth)
    const {user, isLogged} = auth

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <span><i class="fas fa-user"></i></span> {user.Name}<i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }
    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }
    
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">KOODI</Link></h1>
            </div>

            <ul style={transForm}>
                <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>
    )
}

export default Header
