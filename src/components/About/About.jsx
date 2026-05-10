import "./About.css";

const GRID_ITEMS = [
    { id: 1, title: 'Формирует сильный бренд', description: 'Фирменный стиль создаёт характер команды или спортсмена и делает их узнаваемыми среди конкурентов.' },
    { id: 2, title: 'Повышает доверие и статус', description: 'Профессиональный визуал усиливает образ и выводит клуб или личный бренд на новый уровень восприятия.' },
    { id: 3, title: 'Объединяет команду и болельщиков', description: 'Единый визуальный стиль формирует чувство принадлежности и усиливает связь с аудиторией.' },
    { id: 4, title: 'Увеличивает вовлечённость фанатов', description: 'Матчевая графика и цифровой-контент усиливают эмоции и помогают выделяться в ленте.' },
    { id: 5, title: 'Привлекает спонсоров', description: 'Системный и современный дизайн повышает коммерческую привлекательность для партнёров.' },
    { id: 6, title: 'Усиливает продажи', description: 'Дизайн напрямую влияет на спрос на билеты, брендированные и цифровые продукты.' },
];

const About = () => {
    return (
        <section id="about" className="section about fade-up">
            <div className="container">
                <h2 className="about__title">Роль дизайна в спортивной индустрии</h2>
                <div className="about__description">
                    <h3 className="about__subtitle">В двух словах о главном</h3>
                    <div className="about__grid">
                        {GRID_ITEMS.map((item) => (
                            <div className="about__grid-item" key={item.id}>
                                <p className="about__grid-title">{item.title}</p>
                                <p className="about__grid-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;