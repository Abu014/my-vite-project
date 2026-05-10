import './Stages.css';
import stages1 from '../../assets/stages1.png';
import stages2 from '../../assets/stages2.png';
import stages3 from '../../assets/stages3.png';
import stages4 from '../../assets/stages4.png';

const STAGES = [
    {
        id: 1,
        title: 'Бриф и анализ',
        description: 'Обсуждаем цели проекта, аудиторию и задачи. Анализирую рынок, конкурентов и визуальное поле.',
        num: '01',
        theme: 'yellow',
        type: 'text',
    },
    {
        id: 2,
        image: stages1,
        type: 'image',
    },
    {
        id: 3,
        image: stages2,
        type: 'image',
    },
    {
        id: 4,
        title: 'Концепция',
        description: 'Разрабатываю креативное направление и визуальную идею. Формирую стилистику и ключевые решения.',
        num: '02',
        theme: 'dark',
        type: 'text',
    },
    {
        id: 5,
        title: 'Дизайн и система',
        description: 'Создаю финальные макеты, прорабатываю детали и выстраиваю целостную визуальную систему.',
        num: '03',
        theme: 'dark',
        type: 'text',
    },
    {
        id: 6,
        image: stages3,
        type: 'image',
    },
    {
        id: 7,
        title: 'Передача и сопровождение',
        description: 'Передаю исходники, гайдлайны и при необходимости помогаю с внедрением.',
        num: '04',
        theme: 'yellow',
        type: 'text',
    },
    {
        id: 8,
        image: stages4,
        type: 'image',
    },
];

const Stages = () => {
    return (
        <section id="stages" className="stages fade-up">
            <div className="stages__container container">
                <h2 className="stages__title">Этапы работы</h2>
                <p className="stages__subtitle">Как проходит процесс моей работы</p>

                <div className="stages__grid">
                    {STAGES.map((item) => {
                        const itemClass = [
                            'stages__item',
                            `stages__item--${item.type}`,
                            item.theme ? `stages__item--${item.theme}` : '',
                        ]
                            .filter(Boolean)
                            .join(' ');

                        return (
                            <div key={item.id} className={itemClass}>
                                {item.type === 'image' ? (
                                    <img className="stages__image" src={item.image} alt={`Этап ${item.id}`} />
                                ) : (
                                    <>
                                        <h3 className="stages__item-title">{item.title}</h3>
                                        <p className="stages__item-desc">{item.description}</p>
                                        <span className="stages__item-num">{item.num}</span>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stages;