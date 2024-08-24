import about_img1 from './assets/about1.jpg';
import about_img2 from './assets/about2.jpg';
import about_img3 from './assets/about3.jpg';
import about_img4 from './assets/about4.jpg';
import about_img5 from './assets/about5.jpg';
import { useState,useEffect,useRef } from 'react';

function Section2(){
    const[scrollHor,setScrollHor]=useState(0);
    useEffect(()=>{
        const handleScrollEvent=()=>{
            setScrollHor(window.scrollY);
        }
        window.addEventListener('scroll',handleScrollEvent);
        return()=>{
            window.removeEventListener('scroll',handleScrollEvent);
        }
    })

    const topScroll=useRef(null);
    const handleTopScroll=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current,
            behavior:'smooth',
        })
    }

    return(
        <>
        <div className='Section2' >
            <div className='about_above' >
                <img src={about_img1} className='scrollimg1' style={{top:`${(scrollHor<2830)?3500+scrollHor*-1.25:-1180+scrollHor*0.4}px`}} />
                <img src={about_img2} className='scrollimg2' style={{top:`${2200+scrollHor*-0.7}px`}} />
                <img src={about_img3} className='scrollimg3' style={{top:`${(scrollHor<2830)?3500+scrollHor*-1.25:-1180+scrollHor*0.4}px`}} />
            </div>
            <div className='aboutContent' >
                <h1>ABOUT US</h1>
                <p>Our gym is committed to helping clients achieve their fitness goals 
                    through personalized training and expert guidance. With advanced 
                    equipment and unique programs, we tailor our services to individual 
                    needs for a truly client-focused experience. Join us for a holistic approach to fitness and transformation.</p>
            </div>
                <div className='bgcColor bgc1' />
                <div className='bgcColor bgc2' />
            <div className='about_below' >
                <img src={about_img4} className='belowimg1' style={{top:`${3150+scrollHor*-1.1}px`}} />
                <img src={about_img5} className='belowimg2' style={{top:`${3100+scrollHor*-1.1}px`}} />
            </div>
        </div>
        {/* <div className='dummy' ></div> */}
        <div className='UpScroll' onClick={()=>handleTopScroll(topScroll)} style={{scale:`${scrollHor>=2700?'1':'0'}`}} ><p>^</p></div>
        </>
    )
}

export default Section2;