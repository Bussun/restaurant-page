import dishes from './dishes.json';

export default function renderMenu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'invisible');
    
    //Top text
    const textContainer = document.createElement('div');
    textContainer.classList.add('txtContainer');

    const topText = document.createElement('p');
    topText.classList.add('topText');
    topText.innerText = 'Menu';
    textContainer.appendChild(topText);

    const subtitle = document.createElement('p');
    subtitle.classList.add('subtText');
    subtitle.innerText = 'Take a look at the dishes you can order in our restaurant!';
    textContainer.appendChild(subtitle);

    container.appendChild(textContainer);

    //Actual menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const mainDishesText = document.createElement('div');
    mainDishesText.innerText = "Main dishes";
    const dessertsText = document.createElement('div');
    dessertsText.innerText = "Desserts";
    const otherText = document.createElement('div');
    otherText.innerText = "Others";
    mainDishesText.classList.add('dishText');
    dessertsText.classList.add('dishText');
    otherText.classList.add('dishText');

    //Adding dishes from JSON to container
    const mainDishesContainer = document.createElement('div');
    mainDishesContainer.classList.add('mainDishes');
    const dessertsContainer = document.createElement('div');
    dessertsContainer.classList.add('dessertsDishes');
    const otherContainer = document.createElement('div');
    otherContainer.classList.add('otherDishes');

    dishes["Dishes"].forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        //Dish name
        const dishName = document.createElement('p');
        dishName.classList.add('dishName');
        dishName.innerText = dish.name;
        dishDiv.appendChild(dishName);

        //Dish description
        const dishDesc = document.createElement('p');
        dishDesc.classList.add('dishDesc');
        dishDesc.innerText = dish.description;
        dishDiv.appendChild(dishDesc);

        //Ingredients
        const dishIngredients = document.createElement('p');
        dishIngredients.classList.add('dishIngredients');
        dishIngredients.innerText = 'Ingredients: ';
        dish.ingredients.forEach(ingredient => {
            dishIngredients.innerText += ingredient + ' | ';
        });
        dishDiv.appendChild(dishIngredients);

        switch (dish.type) {
            case 'main':
                mainDishesContainer.appendChild(dishDiv);
                break;
            
            case 'dessert':
                dessertsContainer.appendChild(dishDiv);
                break;

            case 'other':
            default:
                otherContainer.appendChild(dishDiv);
                break;
        }
    });

    menuContainer.appendChild(mainDishesText);
    menuContainer.appendChild(mainDishesContainer);
    menuContainer.appendChild(dessertsText);
    menuContainer.appendChild(dessertsContainer);
    menuContainer.appendChild(otherText);
    menuContainer.appendChild(otherContainer);


    container.appendChild(menuContainer);
    return container;
}