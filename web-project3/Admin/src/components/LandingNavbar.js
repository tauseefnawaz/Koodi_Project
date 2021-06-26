// import logo from '../images/logo.jpg';
 import MyMovie from './MyMovie.mp4';


const LandingNavbar = () => {
    return (
        <div className='MainDiv'>
            <video  className='myvideo' autoPlay loop muted>
            {/* autoPlay loop muted */}
                 <source src={MyMovie} type="video/mp4"/>
            </video>
            <div id='logo'></div>     
            <nav className='navBar'>
                   
                    <div id='divlinks'>
                        <a href='www.google.com'>How we work</a>
                        <a href='www.google.com'>About</a>
                        <a href='www.google.com'>Pricing</a>
                    </div>
             </nav>   
             <div id='login'>
                    <button className='courses-button'>Login</button>
                    <button className='courses-button'>Try Koodi for free</button>
             </div> 
            <div className='videoContent'>
                <p id='heading'>Learn To Code By Building Games</p>
                <h4>Enjoy 1:1 session with fun projects and logic building exercises. Learn to code by making interactive games online and showcasing them to friends and family!</h4>
                <button  className='courses-button'>Explore Courses</button>
            </div>
            
        </div>
    )
}

export default LandingNavbar
