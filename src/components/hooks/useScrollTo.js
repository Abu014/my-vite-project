import { useCallback } from 'react';

const HEADER_OFFSET = 120;

export const useScrollTo = () => {
    const scrollTo = useCallback((target) => {
        // target может быть id-строкой или элементом
        const section =
            typeof target === 'string'
                ? document.getElementById(target)
                : target;

        if (!section) return;

        const top =
            section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

        window.scrollTo({ top, behavior: 'smooth' });
    }, []);

    return scrollTo;
};