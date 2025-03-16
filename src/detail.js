import CardService from './services/card-service.js';
import { createImageElement, createLinkElement, createTextElement } from './util/ui.js';


function getCardIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

const id = getCardIdFromUrl();
const service = new CardService();
service.getCardById(id).then(card => {
    renderCard(card);
});

function renderCard(card) {
    const cardContainer = document.getElementById('container');
    const cardElement = createCardElement(card);
    cardContainer.appendChild(cardElement);
}


function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const titleElement = createTextElement('h2', card.name);
    const imageElement = createImageElement(card.card_images[0].image_url);
    const descriptionElement = createTextElement('p', card.description);
    const linkElement = createLinkElement(`detail.html?id=${card.id}`, 'View Details');


    cardElement.appendChild(titleElement);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(linkElement);

    return cardElement;
}