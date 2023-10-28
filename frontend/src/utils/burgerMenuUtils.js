import { useEffect } from 'react';

// BurgerMenu
export const useNoScroll = (isMenuOpen) => {
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);
};

// Header 
let scrollPosition = 0;

export const makeHandleMenuToggle = (isMenuOpen, setMenuOpen) => () => {
    if (!isMenuOpen) {
        scrollPosition = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
    }
    setMenuOpen(prevState => !prevState);
};

export const makeHandleBurgerMenuClose = (setMenuOpen) => () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    setMenuOpen(false);
};

