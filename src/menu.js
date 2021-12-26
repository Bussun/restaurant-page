import dishes from './dishes.json';

export default function renderMenu() {
    const container = document.createElement('div');
    container.classList.add('menu', 'invisible');
    
    //Top text
    const textContainer = document.createElement('div');

    const topText = document.createElement('p');
    topText.classList.add('topText');
    topText.innerText = 'Menu';
    textContainer.appendChild(topText);

    const subtitle = document.createElement('p');
    subtitle.classList.add('subtText');
    subtitle.innerText = 'Take a look at the dishes you can find in our restaurant!';
    textContainer.appendChild(subtitle);

    container.appendChild(textContainer);

    //Actual menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    //Main dishes
    const mainDishesContainer = document.createElement('div');
    dishes["Main dishes"].forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        //Dish name
        const dishName = document.createElement('p');
        dishName.innerText = dish.name;
        dishDiv.appendChild(dishName);

        //Dish description
        const dishDesc = document.createElement('p');
        dishDesc.innerText = dish.description;
        dishDiv.appendChild(dishDesc);

        //Ingredients
        const dishIngredients = document.createElement('p');
        dishIngredients.innerText = 'Ingredients: ';
        dish.ingredients.forEach(ingredient => {
            dishIngredients.innerText += ingredient + ' | ';
        });
        dishDiv.appendChild(dishIngredients);

        mainDishesContainer.appendChild(dishDiv);
    });
    menuContainer.appendChild(mainDishesContainer);

    //Desserts
    const dessertsContainer = document.createElement('div');
    dishes["Desserts"].forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        //Dish name
        const dishName = document.createElement('p');
        dishName.innerText = dish.name;
        dishDiv.appendChild(dishName);

        //Dish description
        const dishDesc = document.createElement('p');
        dishDesc.innerText = dish.description;
        dishDiv.appendChild(dishDesc);

        //Ingredients
        const dishIngredients = document.createElement('p');
        dishIngredients.innerText = 'Ingredients: ';
        dish.ingredients.forEach(ingredient => {
            dishIngredients.innerText += ingredient + ' | ';
        });
        dishDiv.appendChild(dishIngredients);

        dessertsContainer.appendChild(dishDiv);
    });
    menuContainer.appendChild(dessertsContainer);

    //Others
    const otherContainer = document.createElement('div');
    dishes["Others"].forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        //Dish name
        const dishName = document.createElement('p');
        dishName.innerText = dish.name;
        dishDiv.appendChild(dishName);

        //Dish description
        const dishDesc = document.createElement('p');
        dishDesc.innerText = dish.description;
        dishDiv.appendChild(dishDesc);

        //Ingredients
        const dishIngredients = document.createElement('p');
        dishIngredients.innerText = 'Ingredients: ';
        dish.ingredients.forEach(ingredient => {
            dishIngredients.innerText += ingredient + ' | ';
        });
        dishDiv.appendChild(dishIngredients);

        otherContainer.appendChild(dishDiv);
    });
    menuContainer.appendChild(otherContainer);

    container.appendChild(menuContainer);
    return container;
}