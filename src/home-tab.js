const homeTabLoad = () => {
    
    const content = document.getElementById('content');

    // Add navbar
    const navbar = document.createElement('div');
    content.appendChild(navbar);
    navbar.classList.add('navbar')

    // Left side of navbar
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    navbar.appendChild(homeButton);

    const menuButton = document.createElement('button');
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
    contactButton.textContent = 'Contact us';
    navbar.appendChild(contactButton);

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    navbar.appendChild(aboutButton);

    // Description & image
    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = "Fat Thai, located in the heart of Kailua-Kona, is a family owned and operated restaurant. Fat Thai is owned and operated by Chariya and her three daughters. Preserving recipes and traditions of the past for future generations, Fat Thai is a local favorite."
    content.appendChild(description);

    const img = document.createElement('img');
    img.src = '../img/food.png';
    content.appendChild(img);

}

export default homeTabLoad