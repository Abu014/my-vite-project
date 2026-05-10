import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioWall.css';
import {SPORT_WORKS} from "../../data/ portfolioWorks.js";



const TABS = [
    { id: 'sport', label: 'Спортивные направления' },
    { id: 'other', label: 'Другие направления' },
];

const PortfolioWall = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('sport');

    const handleBack = () => {
        navigate('/');
    };

    return (
        <section className="section portfolio-wall">
            <div className="container portfolio-wall__container">
                <div className="portfolio-wall__header">
                    <button onClick={handleBack} className="portfolio-wall__back-btn" aria-label="Назад">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </button>
                    <h2 className="portfolio-wall__title">Портфолио</h2>
                </div>

                {/* Табы */}
                <div className="portfolio-wall__tabs" role="tablist">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            className={`portfolio-wall__tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Контент табов */}
                <div className="portfolio-wall__content">
                    {activeTab === 'sport' && (
                        <div
                            role="tabpanel"
                            id="panel-sport"
                            className="tab-panel"
                        >
                            <div className="portfolio-wall__grid">
                                {SPORT_WORKS.map((work) => (
                                    <article className="portfolio-wall__card" key={work.id}>
                                                <img
                                                    src={work.images}
                                                    alt={work.title}
                                                    className="portfolio-wall__img"
                                                />
                                        <h3 className="portfolio-wall__card-title">{work.title}</h3>
                                        <div className="portfolio-wall__card-desc">{work.description}
                                            <button type="button" className="portfolio-wall__card-btn">Подробнее...</button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'other' && (
                        <div
                            role="tabpanel"
                            id="panel-other"
                            className="tab-panel"
                        >
                            <p className="portfolio-wall__empty">Здесь будут другие направления</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PortfolioWall;