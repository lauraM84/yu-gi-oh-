import CardService from './services/card-service.js';
import { createImageElement, createTextElement } from './util/ui.js';

function getCardIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

const id = getCardIdFromUrl();
const service = new CardService();
service.getCardById(id).then(card => {
    renderCardDetails(card);
});

function renderCardDetails(card) {
    const detailContainer = document.getElementById('detail-container');

    const imageElement = createImageElement(card.card_images[0].image_url);
    const detailsElement = document.createElement('div');
    detailsElement.className = 'details';

    const titleElement = createTextElement('h2', card.name);
    const descriptionElement = createTextElement('p', card.description);
    const typeElement = createTextElement('p', `Type: ${card.type}`);
    const humanReadableCardTypeElement = createTextElement('p', `Human Readable Card Type: ${card.humanReadableCardType}`);
    const frameTypeElement = createTextElement('p', `Frame Type: ${card.frameType}`);
    const raceElement = createTextElement('p', `Race: ${card.race}`);
    const archetypeElement = createTextElement('p', `Archetype: ${card.archetype}`);
    const ygoprodeckUrlElement = createTextElement('p', `YGOProDeck URL: ${card.ygoprodeck_url}`);
    const atkElement = createTextElement('p', `ATK: ${card.atk ?? 'None'}`);
    const defElement = createTextElement('p', `DEF: ${card.def ?? 'None'}`);
    const levelElement = createTextElement('p', `Level: ${card.level ?? 'None'}`);
    const attributeElement = createTextElement('p', `Attribute: ${card.attribute ?? 'None'}`);
    const linkvalElement = createTextElement('p', `Link Value: ${card.linkval ?? 'None'}`);
    const linkmarkersElement = createTextElement('p', `Link Markers: ${card.linkmarkers ?? 'None'}`);
    const typelineElement = createTextElement('p', `Typeline: ${card.typeline ?? 'None'}`);
    const cardSetsElement = document.createElement('div');
    cardSetsElement.className = 'card-sets';
    const cardSetsTitle = createTextElement('h3', 'Card Sets');
    cardSetsElement.appendChild(cardSetsTitle);
    card.card_sets.forEach(set => {
        const setElement = document.createElement('div');
        setElement.className = 'card-set';
        const setName = createTextElement('p', `Set Name: ${set.set_name}`);
        const setCode = createTextElement('p', `Set Code: ${set.set_code}`);
        const setRarity = createTextElement('p', `Set Rarity: ${set.set_rarity}`);
        const setPrice = createTextElement('p', `Set Price: ${set.set_price}`);
        setElement.appendChild(setName);
        setElement.appendChild(setCode);
        setElement.appendChild(setRarity);
        setElement.appendChild(setPrice);
        cardSetsElement.appendChild(setElement);
    });

    detailsElement.appendChild(titleElement);
    detailsElement.appendChild(descriptionElement);
    detailsElement.appendChild(typeElement);
    detailsElement.appendChild(humanReadableCardTypeElement);
    detailsElement.appendChild(frameTypeElement);
    detailsElement.appendChild(raceElement);
    detailsElement.appendChild(archetypeElement);
    detailsElement.appendChild(ygoprodeckUrlElement);
    detailsElement.appendChild(atkElement);
    detailsElement.appendChild(defElement);
    detailsElement.appendChild(levelElement);
    detailsElement.appendChild(attributeElement);
    detailsElement.appendChild(linkvalElement);
    detailsElement.appendChild(linkmarkersElement);
    detailsElement.appendChild(typelineElement);

    detailsElement.appendChild(cardSetsElement);

    detailContainer.appendChild(imageElement);
    detailContainer.appendChild(detailsElement);


    console.log(card);

}

