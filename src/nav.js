import {useRef,useState,useEffect} from 'react'
import Logo from './assets/gymLogo.jpg';

function Nav(){
    const About=useRef(null);
    const Fitness=useRef(null);
    const Premium=useRef(null);
    const Store=useRef(null);
    const Trainers=useRef(null);

    const scrollToSection=(elementRef,ScrollString)=>{
        if(ScrollString==="About"){
            window.scrollTo({
                top:elementRef.current.offsetTop+3100,
                behavior:'smooth',
            })
        }
        if(ScrollString==="Fitness"){
            window.scrollTo({
                top:elementRef.current.offsetTop+3900,
                behavior:'smooth'
            })
        }
        if(ScrollString==="Premium"){
            window.scrollTo({
                top:elementRef.current.offsetTop+4770,
                behavior:'smooth'
            })
        }
        if(ScrollString==="Store"){
            window.scrollTo({
                top:elementRef.current.offsetTop+5545,
                behavior:'smooth'
            })
        }
        if(ScrollString==="Trainers"){
            window.scrollTo({
                top:elementRef.current.offsetTop+6480,
                behavior:'smooth'
            })
        }
    }

    const[scrollto,setScrollTo]=useState(0);
    const[logoSize,SetLogoSize]=useState(120);
    const[LogoBorderSize,SetLogoBorderSize]=useState(100);
    let currentLogo=120,currentBorder=100;


    useEffect(()=>{
        const handleScroll=()=>{
            setScrollTo(scrollTo=>window.scrollY);
            console.log(scrollto);
            SetLogoSize((currentLogo-scrollto<80)?80:currentLogo-scrollto);
            SetLogoBorderSize((currentBorder-scrollto<60)?60:currentBorder-scrollto)
        }

        window.addEventListener('scroll',handleScroll);
    })

    return(
    <>
        {/* <div className='Navigation' style={{top:`${(scrollto<5)&&scrollto*-0.05}px`}}> */}
        <div className='Navigation'>
        <div className='NavContainer' style={{top:`${(scrollto<=2) ? 33:1}px`}}>
            <div>
                <img src={Logo} className="Logo" style={{height:`${scrollto<=2?120:80}px`,width:`${scrollto<=2?120:80}px`}} />
                <div className='LogoBorder' style={{height:`${scrollto<=2?100:60}px`,width:`${scrollto<=2?100:60}px`,top:`${scrollto<=2?-20:0}px`}} ></div>
            </div>
            <div>
                <ul className='NavItems'>
                    <li><a onClick={()=>{scrollToSection(About,"About")}} ref={About} >About</a></li>
                    <li><a onClick={()=>{scrollToSection(Fitness,"Fitness")}} ref={Fitness}>Fitness</a></li>
                    <li><a onClick={()=>{scrollToSection(Premium,"Premium")}} ref={Premium} >Premium</a></li>
                    <li><a onClick={()=>{scrollToSection(Store,"Store")}} ref={Store} >Store</a></li>
                    <li><a onClick={()=>{scrollToSection(Trainers,"Trainers")}} ref={Trainers} >Trainers</a></li>
                    <h1>Sign-Up</h1>
                </ul>
            </div>
        </div>
        </div>
    </>
    )
}
export default Nav;