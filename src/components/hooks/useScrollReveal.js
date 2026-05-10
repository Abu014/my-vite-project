import { useEffect } from 'react';

export const useScrollReveal = (selector = '.fade-up, .fade-left, .fade-right', options = {}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, ...options }
        );

        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector, options.threshold]);
};