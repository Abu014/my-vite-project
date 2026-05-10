import './Contacts.css';

const CONTACT_DATA = {
    name: 'Колодеев Александр',
    phone: '8-(961)-980-73-80',
    email: 'kolodeev.1998@mail.ru',
};

const Contacts = () => {
    return (
        <section id="contacts" className="contacts fade-up">
            <div className="container contacts-container">
                <h2 className="contacts__title">Контактная информация</h2>
            </div>

            <div className="contacts__info-wrapper">
                <div className="container contacts__info">
                    <address className="contacts__card">
                        <p className="contacts__name">{CONTACT_DATA.name}</p>
                        <a className="contacts__link" href={`tel:${CONTACT_DATA.phone.replace(/[()-]/g, '')}`}>
                            {CONTACT_DATA.phone}
                        </a>
                        <a className="contacts__link" href={`mailto:${CONTACT_DATA.email}`}>
                            {CONTACT_DATA.email}
                        </a>
                    </address>
                </div>
            </div>
        </section>
    );
};

export default Contacts;