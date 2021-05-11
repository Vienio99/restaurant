const menuTabLoad = () => {
    
    const content = document.getElementById('content');
    

    const header = document.createElement('h2');
    header.textContent = "Menu"
    content.appendChild(header);
    
    const menuList = document.createElement('div');
    menuList.setAttribute('class', 'menu-list')
    content.appendChild(menuList);


    for (let i = 1; i <= 6; i++) {
        const meal = document.createElement('div');
        meal.setAttribute('class', 'meal');

        const title = document.createElement('h3');
        meal.appendChild(title);

        const price = document.createElement('p');
        meal.appendChild(price);
        price.textContent = '10$';

        const img = document.createElement('img');
        meal.appendChild(img);
        img.src = `../img/${i}.png`
        
        const igredients = document.createElement('div');
        igredients.setAttribute('class', 'ingredients');
        meal.appendChild(igredients);

        meal.setAttribute('id', i);
        menuList.appendChild(meal);
    }

    const firstMeal = document.getElementById('1');
    firstMeal.firstChild.textContent = 'Classic Fat Thai';
    firstMeal.lastChild.textContent = 'king prawn pad Thai, dried shrimp, tofu, egg, beansprout and fried shallot with garlic chives, peanut and lime';

    const secondMeal = document.getElementById('2');
    secondMeal.firstChild.textContent = 'Ginger Beef';
    secondMeal.lastChild.textContent = 'beef rump steak in garlic and ginger sauce with mushroom, Thai pepper, fresh chilli and spring onion';

    const thirdMeal = document.getElementById('3');
    thirdMeal.firstChild.textContent = 'Weeping Tiger Jay';
    thirdMeal.lastChild.textContent = 'triple-cooked soya with green beans, chilli and ginger';

    const fourthMeal = document.getElementById('4');
    fourthMeal.firstChild.textContent = 'Green Curry Jay';
    fourthMeal.lastChild.textContent = 'green curry infused with lemongrass. chilli and ginger with courgette, pea aubergine, bamboo and sweet basil';

    const fifthMeal = document.getElementById('5');
    fifthMeal.firstChild.textContent = 'Aubergine Curry';
    fifthMeal.lastChild.textContent = 'wok-fried Thai and purple aubergines in a yellow coconut curry'

    const sixthMeal = document.getElementById('6');
    sixthMeal.firstChild.textContent = 'Sriracha Ho Fun Noodles';
    sixthMeal.lastChild.textContent = 'wok-fried mushroom, red pepper, baby spinach and flat rice noodles seasoned with sweet chilli, soy and ginger sauce'

}

export default menuTabLoad