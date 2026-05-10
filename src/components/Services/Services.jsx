import './Services.css';
import {useScrollTo} from "../hooks/useScrollTo.js";

const SERVICES_LIST = [
    {
        id: 1,
        title: 'Фирменный стиль спортивных брендов',
        description: 'Логотип, фирменный стиль и визуальная система для клубов и личных брендов спортсменов.',
    },
    {
        id: 2,
        title: 'Матчевая и турнирная графика',
        description: 'Афиши, постеры, стартовые составы, анонсы, статистика, результаты — полный визуальный пакет для соцсетей и цифровой рекламы.',
    },
    {
        id: 3,
        title: 'Дизайн для социальных сетей',
        description: 'Оформление профилей, шаблоны постов, историй, обложек и визуальная стратегия контента.',
    },
    {
        id: 4,
        title: 'Брендированная продукция и атрибутика',
        description: 'Дизайн формы, фан-продукции, капсульных коллекций и упаковки.',
    },
    {
        id: 5,
        title: 'Графика для трансляций',
        description: 'Графика нижней трети экрана, титры, счёт, заставки и другие элементы для экранной подачи.',
    },
];

const Services = () => {
    const scrollTo = useScrollTo();
    return (
        <section id="services" className="section services fade-right">
            <div className="services__container container">
                <h2 className="services__title">Услуги</h2>

                <ul className="services__list" role="list">
                    {SERVICES_LIST.map((service) => (
                        <li className="services__item" key={service.id}>
                            <h3 className="services__item-title">{service.title}</h3>
                            <p className="services__item-desc">{service.description}</p>
                        </li>
                    ))}
                </ul>

                <button className="services__btn" type="button" onClick={() => scrollTo('contacts')}>
                    Связь со мной
                </button>
            </div>
        </section>
    );
};

export default Services;