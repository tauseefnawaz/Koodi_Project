import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './header.css'
import MyMovie from './MyMovie.mp4';

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

    
    return (
        <div className='MainDiv'>
        <video  className='myvideo' autoPlay loop muted>
        {/* autoPlay loop muted */}
             <source src={MyMovie} type="video/mp4"/>
        </video>
        <div id='logo'><Link to="/" ></Link></div>     
        <nav className='navBar'>
               
                <div id='divlinks'>
                    <a href='www.google.com'>How we work</a>
                    <a href='www.google.com'>About</a>
                    <a href='www.google.com'>Pricing</a>
                </div>
         </nav>   
         <div id='login'>
             { 
             isLogged? userLink():
             <button className='courses-button'><Link to="/login" style={{textDecoration:'none'}}>Login</Link></button>}
                {/* <button className='courses-button'><Link to="/login">Try Koodi for free</Link></button> */}
             
         </div> 
        <div className='videoContent'>
            <p id='heading'>Learn To Code By Building Games</p>
            <h4>Enjoy 1:1 session with fun projects and logic building exercises. Learn to code by making interactive games online and showcasing them to friends and family!</h4>
            <button  className='courses-button'>Explore Courses</button>
        </div>
        
    </div>
    )
}

export default Header