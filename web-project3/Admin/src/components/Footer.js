import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div  className='Mockup'>
                <h2>Mockup Company</h2>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className='socialMedia'>
                
                    <img src={facebook} alt=""></img>
                    <img src={twitter} alt=""></img>
                    <img src={instagram} alt=""></img>
                    <img src={youtube} alt=""></img>
             
                </div>
            </div>
            <div className='copyright'>
            <span id='span1'>©2021 Koodi. All rights reserved</span>
            <span id='span2'>Privacy Policy</span>
            <span id='span3'>Terms of Service</span>
            </div>
        </>
    )
}

export default Footer