import { Card } from "../../models/card.js";
import { Service } from "../service.js";

export class PlayService extends Service {
    constructor(controller) {
        super(controller);
    }

    getCards(difficulty, theme) {
        var cards = [];
        var url = `${this.baseURL}/cards/${difficulty}/${theme}`;
        fetch(url).then((response) => {
            response.json().then((data) => {
                data.cards.forEach(cardData => {
                    var card = new Card(cardData.id, cardData.icon);
                    cards.push(card);
                });
                this.controller.showCards(cards);
            }, (error) => {

            });
        }, (reason) => {

        });
    }

    sendScore(score, clicks, time, username) {
        var url = `${this.baseURL}/score`;
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.send(JSON.stringify({ score: score, clicks: clicks, time: time, username: username }));
    }
}