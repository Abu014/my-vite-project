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

    const scrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    const handleNavClick = (sectionId) => {
        if (sectionId === 'documents') {
            navigate('/documents');
        } else {
            if (location.pathname === '/') {
                scrollToSection(sectionId);
            } else {
                navigate(`/#${sectionId}`);
            }
        }
        setIsMenuOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    // Эффект скролла для фона
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

    // Хеш при загрузке
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const id = location.hash.replace('#', '');
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

                <button
                    className={`header__burger${isMenuOpen ? ' header__burger--open' : ''}`}
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span className="header__burger-line" />
                </button>
            </div>

            {/* Мобильное меню */}
            <div
                id="mobile-menu"
                className={`header__mobile-menu${isMenuOpen ? ' header__mobile-menu--open' : ''}`}
                aria-hidden={!isMenuOpen}
                onClick={() => setIsMenuOpen(false)}
            >
                <nav aria-label="Мобильная навигация">
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
                        <hr className="header__mobile-divider" />
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