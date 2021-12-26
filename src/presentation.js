import RestaurantImage from './restaurant_interior.jpg';

export default function renderPresentation() {
    const container = document.createElement('div');
    container.classList.add('main', 'visible');

    //Div for restaurant name and photo
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('presDiv');

    const restaurantName = document.createElement('p');
    restaurantName.classList.add('em');
    restaurantName.innerText = 'Slow Food';
    mainDiv.appendChild(restaurantName);

    const image = new Image();
    image.src = RestaurantImage;
    image.style.width = '35vw';
    image.style.height = 'auto';
    mainDiv.appendChild(image);

    const imgDesc = document.createElement('p');
    imgDesc.innerText = 'Our interior (well, almost)';
    imgDesc.classList.add('small');
    mainDiv.appendChild(imgDesc);

    const restaurantDesc = document.createElement('p');
    restaurantDesc.innerText = 'Welcome to our restaurant! Here, you\'ll take ' + 
                               'all the time you need to eat and enjoy our dishes!' +
                               ' As our name says, we\'re the exact opposite of your favorite fast-food!';
    
    mainDiv.appendChild(restaurantDesc);

    container.appendChild(mainDiv);
    return container;
}