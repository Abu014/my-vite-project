import React, {useState} from 'react';
import "./Docs.css"

const TABS = [
    { id: '1', label: 'Бриф' },
    { id: '2', label: 'Условия оплаты' },
    { id: '3', label: 'Договор на оказание услуг' },
    { id: '4', label: 'Диплом' },

];
const TAB_CONTENT = {
    '1': {
        title: 'Бриф',
        description: 'Здесь можно разместить текст брифа или ссылку на скачивание.',
    },
    '2': {
        title: 'Условия оплаты',
        description: 'Информация об условиях оплаты: предоплата, сроки, способы.',
    },
    '3': {
        title: 'Договор на оказание услуг',
        description: 'Текст договора или PDF-файл для скачивания.',
    },
    '4': {
        title: 'Диплом',
        description: 'Скан диплома или информация об образовании.',
    },
};

const Docs = () => {
    const [activeTab, setActiveTab] = useState('1');


    const activeContent = TAB_CONTENT[activeTab];
    return (
        <section id="documents" className="section docs-wrapper">
            <div className="container docs-wrapper__container">

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
                            {tab.label}
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
                            <p className="docs__panel-desc">{activeContent.description}</p>
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Docs;