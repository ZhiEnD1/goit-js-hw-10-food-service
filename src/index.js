
import menuCardsTpl from './templates/menu.hbs';
import menuItems from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menuContainerRef = document.querySelector('.js-menu');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyChangesRef = document.querySelector('body');
const cardsMarkup = createMenuCards(menuItems);

menuContainerRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCards(cards) {
    return menuCardsTpl(menuItems)
};

if (localStorage.getItem('themeRemember') === 'dark') {
    addDarkTheme();
    themeSwitcherRef.setAttribute('checked', 'true');
}

themeSwitcherRef.addEventListener('change', onThemeChange);

function onThemeChange() {
    if (bodyChangesRef.classList.contains(`${Theme.DARK}`)) {
        onBodyAddClass(`${Theme.DARK}`, `${Theme.LIGHT}`);
        addRememberTheme('light');

    } else if (bodyChangesRef.classList.contains(`${Theme.LIGHT}`)) {
        onBodyAddClass(`${Theme.LIGHT}`, `${Theme.DARK}`);
        addRememberTheme('dark');

    } else {
        addDarkTheme();
        localStorage.setItem('themeRemember', 'dark');
    }
}

function onBodyAddClass(remove, add) {
    bodyChangesRef.classList.remove(remove);
    bodyChangesRef.classList.add(add);
}

function addRememberTheme(value) {
    localStorage.setItem('themeRemember', `${value}`);
}

function addDarkTheme() {
    bodyChangesRef.classList.add(`${Theme.DARK}`);
}
