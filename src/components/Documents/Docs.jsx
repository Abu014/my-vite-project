import React, {useState} from 'react';
import "./Docs.css"
import dogovor from "../../assets/Dogovor.pdf"

const TABS = [
    { id: '1', label: 'Бриф', shortLabel: 'Бриф' },
    { id: '2', label: 'Условия оплаты', shortLabel: 'Условия оплаты' },
    { id: '3', label: 'Договор на оказание услуг', shortLabel: 'Договор'},
    { id: '4', label: 'Диплом', shortLabel: 'Диплом' },

];
const TAB_CONTENT = [

     {  id:1,
        title: 'Бриф \n на разработку дизайна',
        description:[
            { id:1,
            textTitle: 'Общая информация',
            textDesc: ['Имя / компания','Контакт (Telegram / Email / WhatsApp)','Ссылка на соцсети / сайт']},
            {id:2,
                textTitle: 'О проекте',
                textDesc: ['Что нужно разработать?(айдентика / матчевый дизайн / соцсети / мерч / другое)','Кратко опишите задачу проекта','Цель проекта(привлечение аудитории / продажи / имидж / спонсоры)']},
            {id:3,
                textTitle: 'О бренде / команде',
                textDesc: ['Название команды / бренда','Вид спорта','Описание (характер, ценности, позиционирование)','Кто ваша аудитория?']},
            {id:4,
                textTitle: 'Визуальное направление',
                textDesc: ['Есть ли фирменный стиль? (да / нет)','Цвета (если есть)','Предпочтения по стилю(минимализм / агрессивный / премиальный / уличный и т.д.)','Примеры дизайна, которые нравятся (ссылки)','Примеры, которые НЕ нравятся']},
            {id:5,
                textTitle: 'Контент и материалы',
                textDesc: ['Что нужно использовать в дизайне:(логотип, фото игроков, текст, спонсоры и т.д.)','Всё ли готово или нужно создавать?']},
            { id:6,
                textTitle: 'Технические детали',
                textDesc: ['Форматы (Instagram / Stories / печать / мерч и т.д.)','Количество макетов','Сроки (дедлайн)']},
            { id:7,
                textTitle: 'Бюджет',
                textDesc: ['Ориентировочный бюджет проекта','Готовы ли рассматривать предложения? (да / нет)']},
            { id:8,
                textTitle: 'Дополнительно',
                textDesc: ['Нужна ли дальнейшая поддержка?','Есть ли особые пожелания или ограничения?']},
            { id:9,
                textTitle: 'Завершающий вопрос (очень важный)',
                textDesc: ['Какой результат вы считаете успешным?(например: рост вовлечённости, узнаваемость, продажи, стиль команды)']}





        ],
         lastDesc:{
             lastDescTitle:' Завершающий вопрос (очень важный)',
             lastDescText:'Какой результат вы считаете успешным?(например: рост вовлечённости, узнаваемость, продажи, стиль команды)'

         }
    },
    {   id:2,
        title: 'Условия оплаты',
        description:[
            { id:1,
                textTitle: 'Предоплата',
                textDesc: ['Работа начинается после внесения предоплаты 50% от стоимости проекта.']},
            { id:2,
                textTitle: 'Этапы оплаты',
                textDesc: ['Оставшиеся 50% оплачиваются после утверждения финального дизайна и перед передачей исходных файлов.']},
            { id:3,
                textTitle: 'Формирование стоимости',
                textDesc: ['Итоговая стоимость зависит от объёма, сложности задачи и сроков. Финальная цена фиксируется перед началом работы.']},
            { id:4,
                textTitle: 'Дополнительные правки',
                textDesc: ['В стоимость входит согласованное количество правок. Дополнительные изменения оплачиваются отдельно.']},
            { id:5,
                textTitle: 'Срочные проекты',
                textDesc: ['Проекты с ограниченными сроками рассчитываются с дополнительной наценкой.']},
            { id:6,
                textTitle: 'Способы оплаты',
                textDesc: ['Оплата возможна через банковский перевод / онлайн-платежи (обсуждается индивидуально).']},
            { id:7,
                textTitle: 'Возврат средств',
                textDesc: ['Предоплата не возвращается после начала работы, так как бронирует время и ресурсы.']},
            { id:8,
                textTitle: 'Важно',
                textDesc: ['Начало работы означает согласие с условиями.']},
        ],
        lastDesc:{
            lastDescTitle:' Важно',
            lastDescText:'Начало работы означает согласие с условиями.'

        }

    },

    {   id:3,
        title: 'Договор на оказание услуг',
        pdfUrl: dogovor
    },
    {   id:4,
        title: 'Диплом',
        description: [] ,
        pdfUrl: '/documents/diplom.pdf'
    },
];

const Docs = () => {
    const [activeTab, setActiveTab] = useState('1');


    const activeContent = TAB_CONTENT.find(item => String(item.id) === activeTab);
    return (
        <section id="documents" className="section docs-wrapper">
            <div className="container docs-wrapper__container">
                    <h1 className="docs-wrapper__title">Документы</h1>

                <div className="docs-wrapper__tabs" role="tablist">

                    {TABS.map((tab) => (

                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            className={`docs-wrapper__tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="tab-label--full">{tab.label}</span>
                            {tab.shortLabel && <span className="tab-label--short">{tab.shortLabel}</span>}
                        </button>

                    ))}
                </div>
                <div className="docs-wrapper__tabs-content">
                    {activeContent && (
                        <div
                            role="tabpanel"
                            id={`panel-${activeTab}`}
                            className="docs__panel"
                        >
                            <h3 className="docs__panel-title">{activeContent.title}</h3>

                            {activeContent.pdfUrl ? (
                                <div className="docs__pdf-wrapper">
                                    <a href={activeContent.pdfUrl} target="_blank" rel="noopener noreferrer">
                                        Открыть PDF
                                    </a>
                                </div>
                            ) : (
                                // Обычный контент
                                <>
                                    {activeContent.description?.length > 0 && (
                                        <ol className="docs__panel-description">
                                            {activeContent.description.map((section) => (
                                                <li key={section.id} className="docs__panel-description__title">
                                                    {section.textTitle}
                                                    <ul className="docs__panel-desc">
                                                        {section.textDesc.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ol>

                                    )}
                                    {activeContent.lastDesc && (
                                        <div className="docs__panel-last">
                                            <p className="docs__panel-last-title">{activeContent.lastDesc.lastDescTitle}</p>
                                            <p className="docs__panel-last-desc">{activeContent.lastDesc.lastDescText}</p>
                                        </div>
                                    )}


                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Docs;