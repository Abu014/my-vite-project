import { useScrollTo } from '../hooks/useScrollTo.js';
import './Hero.css';

const Hero = () => {
    const scrollTo = useScrollTo();

    return (
        <section id="hero" className="section hero">
            <div className="container">
                <div className="hero-content fade-up">
                    <h1 className="hero-title">
                        <span className="highlight">ГРАФИЧЕСКИЙ</span><br />
                        <span className="highlight">ДИЗАЙНЕР</span> СПОРТИВНОЙ<br />
                        ИНДУСТРИИ
                    </h1>
                    <p className="hero-description">
                        Спортивная графика для соцсетей, трансляций и маркетинга — создаю
                        визуал, который повышает вовлечённость и усиливает узнаваемость бренда.
                    </p>
                    <button
                        className="hero-btn"
                        type="button"
                        onClick={() => scrollTo('contacts')}
                    >
                        Обсудить проект
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;