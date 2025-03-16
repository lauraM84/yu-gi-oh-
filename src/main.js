import CardService from "./services/card-service.js";
import { createImageElement, createLinkElement, createTextElement } from "./util/ui.js";

const service = new CardService();
service.getCards().then(cards => {
    console.log(cards);
    renderCards(cards);
});

function renderCards(cards) {
    const cardContainer = document.getElementById('container');
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardContainer.appendChild(cardElement);
    });
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
