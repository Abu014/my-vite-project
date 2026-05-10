import { useScrollReveal } from './hooks/useScrollReveal.js';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Services from './Services/Services.jsx';
import Contacts from './Contacts/Contacts.jsx';
import Stages from './Stages/Stages.jsx';

const Screen = () => {
    useScrollReveal();

    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Stages />
            <Contacts />
        </>
    );
};

export default Screen;