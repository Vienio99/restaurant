const loadPage = () => {
    
    const navbar = document.getElementById('navbar');

    // Left side of navbar
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home-tab');
    homeButton.textContent = 'Home';
    navbar.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu-tab');
    menuButton.textContent = 'Menu';
    navbar.appendChild(menuButton);

    // Middle side of navbar

    const titles = document.createElement('div');
    navbar.appendChild(titles);

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.textContent = 'Fat Thai';
    titles.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.setAttribute('id', 'sub-title');
    subTitle.textContent = 'Ketogenic Thai cuisine';
    titles.appendChild(subTitle);

    // Right side of navbar
    const contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contact-tab');
    contactButton.textContent = 'Contact us';
    navbar.appendChild(contactButton);

    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'about-tab');
    aboutButton.textContent = 'About';
    navbar.appendChild(aboutButton);

}

export default loadPage