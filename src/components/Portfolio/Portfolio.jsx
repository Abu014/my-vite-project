import { useNavigate } from 'react-router-dom';
import './Portfolio.css';


import otherImg1 from '../../assets/mediaBanner.png';
import otherImg2 from '../../assets/matchPoster.png';
import otherImg3 from '../../assets/matchAnnouncement.png';

import {OTHER_WORKS, SPORT_WORKS} from '../../data/portfolioWorks.js';

const OTHER_IMAGE = [
    { src: otherImg1, alt: 'Пример работы 1' },
    { src: otherImg2, alt: 'Пример работы 2' },
    { src: otherImg3, alt: 'Пример работы 3' },
];

const PORTFOLIO_PATH = '/portfolio-wall';

const Portfolio = () => {
    const navigate = useNavigate();
    console.log(SPORT_WORKS);


    return (
        <section id="portfolio" className="section portfolio fade-up">
            <div className="container portfolio-container">
                <h2 className="portfolio__title">Портфолио</h2>

                {/* Баннер */}
                <div className="portfolio-banner">
                        <img src={SPORT_WORKS[0].detailImage} alt="Макет баннера на iPad Pro" className="portfolio__img--main item1 " />
                        <img src={SPORT_WORKS[0].cardImage} alt="Пример баннера в Instagram stories" className="portfolio__img--example item2" />
                        <h3 className="portfolio__project-title item3">{SPORT_WORKS[0].title}</h3>
                        <p className="portfolio__project-desc item4">
                            {SPORT_WORKS[0].description}
                        </p>
                    </div>
            </div>

            {/* Постер (на тёмном фоне) */}
            <div className="portfolio-poster">
                    <div className="container">
                    <div className="portfolio-poster-info">
                            <h3 className="portfolio__project-poster-title itemP1">{SPORT_WORKS[1].title}</h3>
                            <p className="portfolio__project-poster-desc itemP2">
                                {SPORT_WORKS[1].description}
                            </p>
                            <img src={SPORT_WORKS[1].cardImage} alt="Пример постера" className="portfolio__img--example itemP3" />
                            <img src={SPORT_WORKS[1].detailImage} alt="Макет постера на iPad Mini" className="portfolio__img--main portfolio__img--main--light itemP4" />
                    </div>
                </div>
            </div>

            {/* Другие работы */}
            <div className="container">
                <div className="portfolio-other">
                    {OTHER_IMAGE.map((img, idx) => (
                        <img key={idx} src={img.src} alt={img.alt} className="portfolio__other-img" />
                    ))}
                    <button
                        type="button"
                        className="portfolio__other-btn"
                        onClick={() => navigate(PORTFOLIO_PATH)}
                    >
                        Другие работы
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;