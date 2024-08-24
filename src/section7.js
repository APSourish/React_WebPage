import gymCompetition_img1 from './assets/gymCompetition1.jpg';
import gymCompetition_img2 from './assets/gymCompetition2.jpg';
import gymCompetition_img3 from './assets/gymCompetition3.jpg';

function Section7(){
    return(
        <>
        <div className='Section7' >
            <h1 className='ComHeading' >Competitions</h1>
            <div className='Competition' >
                <img src={gymCompetition_img1} />
                <h1>Marothon</h1>
            </div>
            <div className='Competition' >
                <img src={gymCompetition_img2} />
                <h1>Body Transformation</h1>
            </div>
            <div className='Competition' >
                <img src={gymCompetition_img3} />
                <h1>Cycle Race</h1>
            </div>
        </div>
        <div className='competitionbgc1' />
        <div className='competitionbgc2' />
        <div className='competitionbgc3' />
        <div className='competitionbgc4' />
        <div className='competitionbgc5' />
        <div className='competitionbgc6' />
        <div className='competitionbgc7' />
        <div className='competitionbgc8' />
        <div className='competitionbgc9' />
        </>
    )
}

export default Section7;