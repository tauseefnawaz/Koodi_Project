import anchor from '../images/anchor.png';
import flag from '../images/flag.png';
import ribbon from '../images/ribbon.png';
const KoodiWorks = () => {
    return (
        <div className='container2'>
            <div className='row'>
            <h1>How Koodi Works</h1>
            </div>
            <div className="row" >
                <div className='col-md-3'>
                    <div className="thumbnail">
                    <div className="image-thumb">
                    <img className="img" src={anchor} alt="..."></img>
                    </div>
                     <div className="caption">
                     <h3>Pick a plan</h3>
                        <p><br></br>Choose between the four exciting plans Koodi has designed for you,or let us custom design a special package to better suit your child's needs</p>
                    </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="thumbnail"> 
                    <div className="image-thumb">
                    <img className="img" src={flag} alt=""></img>
                    </div>
                     <div className="caption">
                     <h3>Get matched with your 1:1 instructor</h3>
                        <p>Koodi has an entire team of dedicated instructors. Once you fill in your application, our management will match you with the best possible fit</p>
                    </div>
                    </div>
                </div>
                <div className='col-md-3' >
                    <div className="thumbnail">
                    <div className="image-thumb">
                    <img className="img" src={ribbon} alt=""></img>
                    </div>
                     <div className="caption">
                     <h3>Solution</h3>
                        <p><br></br>Koodi has an entire team of dedicated instructors. Once you fill in your application, our management will match you with the best possible fit</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KoodiWorks