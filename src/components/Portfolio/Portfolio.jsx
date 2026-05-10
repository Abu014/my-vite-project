import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

import ipadPro from '../../assets/iPad_Pro_2018.png';
import instaStoryExample from '../../assets/Instagram_story - 10 1.png';
import ipadMini from '../../assets/iPad_Mini_2021.png';
import instaPosterExample from '../../assets/Instagram story - 17 1.png';
import otherImg1 from '../../assets/Frame 6 1.png';
import otherImg2 from '../../assets/Frame 16 1.png';
import otherImg3 from '../../assets/Frame 17 1.png';

const OTHER_WORKS = [
    { src: otherImg1, alt: 'Пример работы 1' },
    { src: otherImg2, alt: 'Пример работы 2' },
    { src: otherImg3, alt: 'Пример работы 3' },
];

const PORTFOLIO_PATH = '/portfolio-wall';

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <section id="portfolio" className="section portfolio fade-up">
            <div className="container">
                <h2 className="portfolio__title">Портфолио</h2>

                {/* Баннер */}
                <div className="portfolio-banner">
                        <img src={ipadPro} alt="Макет баннера на iPad Pro" className="portfolio__img--main item1" />
                        <img src={instaStoryExample} alt="Пример баннера в Instagram stories" className="portfolio__img--example item2" />
                        <h3 className="portfolio__project-title item3">Баннер для социальных сетей</h3>
                        <p className="portfolio__project-desc item4">
                            Истории получают больше внимания, чем обычные посты. Баннер помогает захватить внимание за первые 1–2 секунды и не потеряться в ленте.<br/><br />
                            Нет времени «разогревать» аудиторию. Чёткий визуал + сильный заголовок сразу объясняют, что вы предлагаете и почему это важно.
                        </p>
                    </div>
            </div>

            {/* Постер (на тёмном фоне) */}
            <div className="portfolio-poster">
                    <div className="container">
                    <div className="portfolio-poster-info">
                            <h3 className="portfolio__project-poster-title itemP1">Рекламный постер для социальных сетей</h3>
                            <p className="portfolio__project-poster-desc itemP2">
                                Когда рекламный материал выглядит системно и качественно, бренд воспринимается как более серьёзный и надёжный. Это формат «здесь и сейчас». Хороший баннер превращает внимание в конкретное действие.
                            </p>
                            <img src={instaPosterExample} alt="Пример постера" className="portfolio__img--example itemP3" />
                            <img src={ipadMini} alt="Макет постера на iPad Mini" className="portfolio__img--main portfolio__img--main--light itemP4" />
                    </div>
                </div>
            </div>

            {/* Другие работы */}
            <div className="container">
                <div className="portfolio-other">
                    {OTHER_WORKS.map((img, idx) => (
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