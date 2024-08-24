import {useState,useEffect} from 'react'
import bulk from './assets/carousel_img1.jpg';
import muscular from './assets/carousel_img2.jpg';
import fitness from './assets/carousel_img3.jpg';
import sport from './assets/carousel_img4.jpg';
import yoga from './assets/carousel_img5.jpg';
import bgcimg1 from './assets/gym_bgc1.jpg';
import bgcimg2 from './assets/gym_bgc2.jpg';
import bgcimg3 from './assets/gym_bgc3.jpg';
import bgcimg4 from './assets/gym_bgc4.jpg';
import bgcimg5 from './assets/gym_bgc5.jpg';

function Section1(){
    const[scrollY,setScrollY]=useState(0);
    const[bulkSize,SetBulk]=useState(0);
    const[muscularSize,SetMuscular]=useState(0);
    const[fitnessSize,SetFitness]=useState(0);
    const[sportSize,SetSportSize]=useState(0);
    const[yogaSize,SetYoga]=useState(0);

    useEffect(()=>{
        const handleScroll=()=>{
            setScrollY((window.scrollY));
        };
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll());
        }
    })

    const sec1=useEffect(()=>{
        SetBulk(bulkSize=>(scrollY<5)&&scrollY+550);
        SetMuscular(muscularSize=>(scrollY<523)&&scrollY+80);
        SetFitness(fitness=>(scrollY<825)&&scrollY*0.7);
        SetYoga(yogaSize=>(scrollY<1360)&&scrollY*0.45);
        SetSportSize(sportSize=>(scrollY<2150)&&scrollY*0.26);
    })
    const bulkStyle={
        bottom:150+scrollY*0.5+'px',
        left:200+scrollY*1.1+'px',
        height:bulkSize+'px',
        width:bulkSize+'px',
    };
    const muscularStyle={
        bottom:-150+scrollY*0.2+'%',
        left:-400+scrollY*1.1+'px',
        height:muscularSize+'px',
        width:muscularSize+'px'
    };
    const fitnessStyle={
        bottom:-325+scrollY*0.2+'%',
        left:-1000+scrollY*1.1+'px',
        height:fitnessSize+'px',
        width:fitnessSize+'px'
    };
    const yogaStyle={
        bottom:-505+scrollY*0.2+'%',
        left:-1600+scrollY*1.1+'px',
        height:yogaSize+'px',
        width:yogaSize+'px',
    }
    const sportStyle={
        bottom:-700+scrollY*0.2+'%',
        left:-2200+scrollY*1.1+'px',
        height:sportSize+'px',
        width:sportSize+'px'
    }

    const bulkHeading={
        top:scrollY*0.8+'px',
        left:scrollY*-0.2+'%',
    }
    const muscleHeading={
        top:-400+scrollY*0.8+'px',
        left:(scrollY<500)?-300+scrollY*0.9+'px':600+scrollY*-0.9+'px',
    }
    const fitnessHeading={
        top:-850+scrollY*0.8+'px',
        left:(scrollY<1020)?-700+scrollY*0.9+'px':1128+scrollY*-0.9+'px'
    }
    const sportHeading={
        top:-1300+scrollY*0.8+'px',
        left:(scrollY<1560)?-1200+scrollY*0.9+'px':1600+scrollY*-0.9+'px'
    }
    const yogaHeading={
        top:-1750+scrollY*0.8+'px',
        left:(scrollY<2150)?-1650+scrollY*0.9+'px':2210+scrollY*-0.9+'px'
    }
    
    const backgroundimg={
        top:-2900+scrollY*1.39+'px'
    }

    return(
        <>
        {/* <div className='Section1' > */}
        <div className='carousel' >
            <div className='carouselContent' style={{display:`${scrollY<=2680?'inline':'none'}`}} >
                <div id="bulkHeading" style={bulkHeading} >
                    <h1>Bulking</h1>
                    <p>What seems impossible today will one day become your warm-up.</p>
                </div>
                <div id="muscleHeading" style={muscleHeading} >
                    <h1>Fitness</h1>
                    <p>Take care of your body. It’s the only place you have to live.</p>
                </div>
                <div id="fitnessHeading" style={fitnessHeading} >
                    <h1>Muscle Building</h1>
                    <p>The only place where success comes before work is in the dictionary.</p>
                </div>
                <div id="sportHeading" style={sportHeading} >
                    <h1>Sports</h1>
                    <p>Hard work beats talent when talent doesn’t work hard.</p>
                </div>
                <div id="yogaHeading" style={yogaHeading} >
                    <h1>Yoga</h1>
                    <p>Yoga is the journey of the self, through the self, to the self.</p>
                </div>
            </div>
            <div className='imgContainer' >
                <img src={bulk}  id='bulk' style={bulkStyle} />
                <img src={muscular} id='muscular' style={muscularStyle} />
                <img src={fitness} id='fitness' style={fitnessStyle} />
                <img src={yoga} id='yoga' style={yogaStyle} />
                <img src={sport} id='sport' style={sportStyle} />
            </div>
        </div>
        {/* </div> */}
        <div className='outerimg' >
            <div className='bgcimg'style={backgroundimg} >
                <img src={bgcimg5} />
                <img src={bgcimg4} />
                <img src={bgcimg3} />
                <img src={bgcimg2} />
                <img src={bgcimg1} />
            </div>
        </div>
        
        </>
    )
}

export default Section1;