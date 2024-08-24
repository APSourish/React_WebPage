import Slideimg1 from './assets/imgSlider1.jpeg';
import Slideimg2 from './assets/imgSlider2.jpeg';
import Slideimg3 from './assets/imgSlider3.jpeg';
import Slideimg4 from './assets/imgSlider4.jpeg';
import Slideimg5 from './assets/imgSlider5.jpeg';
import Graph from './assets/graph.png';
import { useState,useEffect } from 'react';

function Section3(){
    const moveNext=useEffect(()=>{
        let move=document.querySelector('.next');
        move.addEventListener('click',()=>{
            let next=document.querySelectorAll('.slide1');
            // document.querySelector('.CoverSlide').prepend(next[next.length-1]);
            document.querySelector('.CoverSlide').appendChild(next[0]);
        });
    })

    return(
        <>
        <div className='Section3'>
            <div className='CoverSlide' id='CoverSlide'>
            <img src={Slideimg1} className='slide1' />
            <img src={Slideimg2} className='slide1' />
            <img src={Slideimg3} className='slide1' />
            <img src={Slideimg4} className='slide1' />
            <img src={Slideimg5} className='slide1' />
            </div>
            <div className='next' ><p>Next</p></div>
        </div>
        </>
    )
}
export default Section3