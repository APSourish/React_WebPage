import premium_img1 from './assets/premium_img1.png';
import premium_img2 from './assets/premium_img2.png';
import premium_img3 from './assets/premium_img3.png';
import premium_img4 from './assets/premium_img4.png';

function Section4(){
    return(
        <>
        <div className='Section4' >
            <div className='premiumSec' >
                <div className='premium_img' ><img src={premium_img1} /><h1>Elite</h1></div>
                <ul>
                    <h6>Unlimited Access to</h6>
                    <li>At-center group classes</li>
                    <li>All ELITE & PRO gyms</li>
                    <li>At-home live workouts</li>
                </ul>
            </div>
            <div className='premiumSec'>
                <div className='premium_img' ><img src={premium_img2} /><h1>Pro</h1></div>
                <ul>
                    <h6>Unlimited Access to</h6>
                    <li>All PRO gyms</li>
                    <li>2 Sessions/month at ELITE gyms & group classes</li>
                    <li>At-home live workouts</li>
                </ul>
            </div>
            <div className='premiumSec'>
                <div className='premium_img' ><img src={premium_img3} /><h1>Play</h1></div>
                <ul>
                    <h6>Unlimited Access to</h6>
                    <li>Badminton, swimming & other sports</li>
                    <li>Guaranteed playing partner</li>
                    <li>Guided sessions with experts</li>
                </ul>
            </div>
            <div className='premiumSec'>
                <div className='premium_img' ><img src={premium_img4} /><h1>Select</h1></div>
                <ul>
                    <h6>Unlimited Access to</h6>
                    <li>One center that you choose</li>
                    <li>Limited sessions* in other centers & gyms in your city</li>
                    <li>At-home live workouts</li>
                </ul>
            </div>
        </div>
            <div className='premiumColor1' />
            <div className='premiumColor2' />
            <div className='premiumColor3' />
        </>
    )
}

export default Section4;