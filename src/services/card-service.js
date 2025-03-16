import { fromJson } from "../model/card.js";

export default class CardService {
    getCards() {
        return fetch('/assets/cards.json')
            .then(response => response.json())
            .then(jsonArray => jsonArray.map(jsonItem => fromJson(jsonItem)));

    }
    getCardById(id) {
        return this.getCards()
            .then(cards => cards.find(card => card.id === id));
    }
}   