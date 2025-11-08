import "@styles/home.scss";

import tkdImg from '@assets/home/taekwondo.jpg';
import yogaImg from '@assets/home/yoga.webp';

const Home = () => {
    return (
        <div className="card-home">
            <div>
                <img src="../public/home/funcional.jpg" alt="funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src="../public/home/zumba.jpg" alt="zumba" />
                <h2>Zumba</h2>
            </div>
            <div>
                <img src={tkdImg} alt="taekwondo" />
                <h2>Taekwondo</h2>
            </div>
            <div>
                <img src={yogaImg} alt="yoga" />
                <h2>Yoga</h2>
            </div>
            
        </div>
    )
}

export default Home;