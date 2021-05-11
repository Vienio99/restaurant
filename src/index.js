import loadPage from './load-page.js';
import homeTabLoad from './home-tab.js';
import menuTabLoad from './menu-tab.js';
import contactTabLoad from './contact-tab.js';



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

        if (e.target.id == 'contact-tab') {
            removeContent(content);
            contactTabLoad();
        }
        
    }
});

function removeContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }

};


