import React from 'react';
import "./PortfolioItem.css"
import {OTHER_WORKS, SPORT_WORKS} from "../../../data/portfolioWorks.js";
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const PortfolioItem = () => {
    const { workId } = useParams();
    const allWorks = [...SPORT_WORKS, ...OTHER_WORKS];
    const work = allWorks.find(item => item.id === workId);
    const navigate = useNavigate();


    const isOtherWork = work?.id.startsWith('other-'); // или любое другое условие

    if (!work) return <div>Проект не найден</div>;
    const handleBack = () => {
        navigate('/portfolio-wall');
    };

    return (
        <section className="section portfolio_item">
            <div className="container portfolio-item__container">
                <div className="portfolio-item__header">
                    <button onClick={handleBack} className="portfolio-wall__back-btn" aria-label="Назад">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                        <p>Назад</p>
                    </button>
                    <h1 className="portfolio-item__title">Подробно о проектах</h1>
                    <h2 className="portfolio-item__subtitle">{work.title}</h2>
                </div>
                <div className={`portfolio-item__content ${isOtherWork ? 'portfolio-item__content--other' : ''}`}>
                    <div className="portfolio-item__content__gallery">
                        {work.cardImage.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${work.title} – изображение ${index + 1}`}
                                className="portfolio-item__content__image"
                            />

                        ))}

                        {/* Кастомная кнопка (если есть) */}
                        {work.actionButton && (
                            <a
                                href={work.actionButton.url}
                                target={work.actionButton.target || '_self'}
                                rel="noopener noreferrer"
                                className={`portfolio-item__action-btn ${work.actionButton.className || ''}`}
                            >
                                {work.actionButton.text}
                            </a>
                        )}

                    </div>
                    {isOtherWork && (
                        <div className="portfolio-item__content__thumbnail-wrapper">
                            <img
                                src={work.thumbnail}
                                alt={work.title}
                                className="portfolio-item__content__thumbnail"
                            />
                            <a
                                href={work.actionButton.url}
                                target={work.actionButton.target || '_self'}
                                rel="noopener noreferrer"
                                className={`portfolio-item__action-btn ${work.actionButton.className || ''}`}
                            >
                                {work.actionButton.text}
                            </a>
                        </div>
                    )}

                    <div className="portfolio-item__content__filling">
                        <p className="portfolio-item__content__filling__title">О Проекте</p>
                        <p className="content__filling-text">{work.projectInfo.about}</p>

                        <p className="portfolio-item__content__filling__title">Задача</p>
                        <p className="content__filling-text">{work.projectInfo.task}</p>

                        <p className="portfolio-item__content__filling__title">Решение</p>
                        <p className="content__filling-text">{work.projectInfo.solution}</p>

                        <p className="portfolio-item__content__filling__title">Что было сделано</p>
                        <p className="content__filling-text">{work.projectInfo.process}</p>

                        <p className="portfolio-item__content__filling__title">Результат</p>
                        <div className="content__filling-text-result">{typeof work.projectInfo.result === 'string' ? (
                            <p className="content__filling-text-result">{work.projectInfo.result}</p>
                        ) : (
                            <>
                                {work.projectInfo.result.intro && <p>{work.projectInfo.result.intro}</p>}
                                <ul className="result-list">
                                    {work.projectInfo.result.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                {work.projectInfo.result.conclusion && <p>{work.projectInfo.result.conclusion}</p>}
                            </>
                        )}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioItem;