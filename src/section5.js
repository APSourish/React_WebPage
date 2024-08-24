import store_img1 from './assets/store_img1.jpeg';
import store_img2 from './assets/store_img2.jpeg';
import store_img3 from './assets/store_img3.jpeg';
import store_img4 from './assets/store_img4.jpeg';
import store_img5 from './assets/store_img5.jpeg';
import store_img6 from './assets/store_img6.jpeg';
import store_img7 from './assets/store_img7.jpeg';
import store_img8 from './assets/store_img8.jpeg';

function Section5(){
    return(
        <>
        <div className='Section5' >
            <div className='storeImgContainer' >
                <div className='storeItem' >
                    <div>
                        <img src={store_img1} />
                        <h1>T-Shirt</h1>
                        <p>breathable top designed for athletic activities, offering comfort and moisture-wicking properties.</p>
                    </div>
                    <div>
                        <img src={store_img2} />
                        <h1>Tights</h1>
                        <p>Tights are form-fitting athletic wear designed for flexibility, support, and comfort during workouts.</p>
                    </div>
                    <div>
                        <img src={store_img3} />
                        <h1>Footwear</h1>
                        <p>Footwear is specialized athletic shoes designed to provide stability, support, and grip during various fitness exercises.</p>
                    </div>
                    <div>
                        <img src={store_img4} />
                        <h1>Bottomwear</h1>
                        <p>Durable apparel designed for workouts, providing comfort and ease of movement during exercise routines.</p>
                    </div>
                </div>
                <div className='storeItem' >
                    <div>
                        <img src={store_img5} />
                        <h1>Spin Bikes</h1>
                        <p>Spin bike is designed for high-intensity indoor cycling workouts, mimicking the feel of outdoor cycling with adjustable resistance.</p>
                    </div>
                    <div>
                        <img src={store_img6} />
                        <h1>Cycles</h1>
                        <p>Cycles are two-wheeled vehicles powered by pedaling or an engine, used for transportation, exercise, and recreation.</p>
                    </div>
                    <div>
                        <img src={store_img7} />
                        <h1>Accessories</h1>
                        <p>Gym accessories include essential that enhance workout performance and safety.</p>
                    </div>
                    <div>
                        <img src={store_img8} />
                        <h1>Gloves</h1>
                        <p>Gloves are hand coverings designed to provide protection, grip, and insulation for various activities or environments.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='storebgc1' />
        <div className='storebgc2' />
        <div className='storebgc3' />
        <div className='storebgc4' />
        </>
    )
}

export default Section5;