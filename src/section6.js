import trainer_img1 from './assets/gymtrainer1.jpg';
import trainer_img2 from './assets/gymtrainer2.jpg';
import trainer_img3 from './assets/gymtrainer3.jpg';
import trainer_img4 from './assets/gymtrainer4.jpg';
import trainer_img5 from './assets/gymtrainer5.jpg';
import trainer_img6 from './assets/gymtrainer6.jpg';
import trainer_img7 from './assets/gymtrainer7.jpg';
import trainer_img8 from './assets/gymtrainer8.jpg';
import trainer_img9 from './assets/gymtrainer9.jpg';


function Section6(){
    return(
        <>
        <div className='Section6' >
            <h1 className='trainer' >Our Trainers</h1>
            <div className='TrainerImgContainer' >
                <div id='personalTrainer1' >
                    <img src={trainer_img1} />
                    <img src={trainer_img2} />
                </div>
                <div id='personalTrainer2' >
                    <img src={trainer_img3} />
                    <img src={trainer_img4} />
                </div>
            </div>
            <div className='TrainerImgContainer' >
                <div id='generalTrainer1' >
                    <img src={trainer_img5} />
                    <img src={trainer_img6} />
                    <img src={trainer_img7} />
                </div>
                <div id='generalTrainer2' >
                    <img src={trainer_img8} />
                    <img src={trainer_img9} />
                </div>
            </div>
        </div>
        <div className='trainerbgc1' />
        <div className='trainerbgc2' />
        <div className='trainerbgc3' />
        <div className='trainerbgc4' />
        </>
    )
}

export default Section6;