import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
    { id: 'hero', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'services', label: 'Услуги' },
    { id: 'stages', label: 'Этапы' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'documents', label: 'Документы' },
];

const HEADER_OFFSET = 120;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Определяем, находимся ли мы на странице PortfolioWall
    const isPortfolioWall = location.pathname === '/portfolio-wall';

    // Скролл к секции (работает только на главной, где есть секции)
    const scrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    // Обработчик клика по навигационным кнопкам
    const handleNavClick = (sectionId) => {
        if (isPortfolioWall) {
            // На странице PortfolioWall: переходим на главную с якорем
            navigate(`/#${sectionId}`);
        } else {
            // На главной: просто скроллим
            scrollToSection(sectionId);
        }
        setIsMenuOpen(false)    ;
    };

    // Обработчик клика по логотипу
    const handleLogoClick = () => {
        if (isPortfolioWall) {
            // На странице PortfolioWall: просто возвращаемся на главную
            navigate('/');
        } else {
            // На главной: скроллим вверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Эффект для отслеживания скролла (для фона хедера)
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 100);
                    ticking = false;
                });
                ticking = true;
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Если страница загружена с хешем (например, /#portfolio), прокручиваем к секции
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const id = location.hash.replace('#', '');
            // Небольшая задержка, чтобы DOM отрисовался
            setTimeout(() => scrollToSection(id), 100);
        }
    }, [location, scrollToSection]);

    return (
        <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
            <div className="header__inner">
                <button className="header__logo" type="button" onClick={handleLogoClick}>
                    Колодеев Александр
                </button>

                <nav className="header__nav" aria-label="Навигация по разделам">
                    <ul className="header__nav-list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    className="header__nav-link"
                                    type="button"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={`header__burger${isMenuOpen ? ' header__burger--open' : ''}`}
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls={"mobile-menu"}
                        aria-label={isMenuOpen ? 'закрыть меню' : 'открыть меню'}
                        onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <span className="header__burger-line"/></button>
            </div>
            <div id="mobile-menu"
                 className={`header__mobile-menu${isMenuOpen ? ' header__mobile-menu--open' : ''}`}
                 aria-hidden={!isMenuOpen}
                 onClick={() => setIsMenuOpen(false)}>
                <nav aria-label="Мобильная навигация"
                >

                    <ul className="header__mobile-list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    className="header__mobile-link"
                                    type="button"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}

                                </button>

                            </li>
                        ))}
                        <hr className="header__mobile-divider"/>
                        <div className="header__mobile-contacts">
                            <p className="header__mobile-contact-item">8-(961)-980-73-80</p>
                            <p className="header__mobile-contact-item">kolodeev.1998@mail.ru</p>
                            <p className="header__mobile-contact-item">Колодеев Александр</p>
                        </div>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;