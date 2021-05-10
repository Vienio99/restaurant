import loadPage from './load-page.js';
import homeTabLoad from './home-tab.js';
import menuTabLoad from './menu-tab.js';

loadPage();
homeTabLoad();

document.addEventListener('click', (e) => {

    const content = document.getElementById('content');

    if (e.target) {
        if (e.target.id == 'home-tab') {
            removeContent(content);
            homeTabLoad();
        };

        if (e.target.id == 'menu-tab') {
            removeContent(content);
            menuTabLoad();
        }
    }
});

function removeContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }

};


