import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'
import MyMovie from './MyMovie.mp4';

const NavBar = () => {
    const auth = useSelector(state => state.auth)
    const { user, isLogged } = auth

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <span><i class="fas fa-user"></i></span> {user.Name}<i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/addCourse">Add Course</Link></li>
                <li><Link to="/ViewCourse">View Course</Link></li>
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

           <div className='container'>
                <div id='logo'><Link to="/" ></Link></div>
                <div id='login'>
                    <form>
                        <input className="serach_input" type="text" placeholder="Search.." name="search" />
                        <button className="button_input" type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    {
                        isLogged ? userLink() :
                            <button className='courses-button'><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></button>}
                    {/* <button className='courses-button'><Link to="/login">Try Koodi for free</Link></button> */}
                </div>
            </div>

    )
}

export default NavBar