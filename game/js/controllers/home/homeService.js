import { Score } from "../../models/score.js";
import { Service } from "../service.js";

export class HomeService extends Service {
    constructor(controller) {
        super(controller);
    }

    getScore() {
        let score = null;
        var url = `${this.baseURL}/score`;
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                if (data !== null) {
                    score = new Score(data.clicks, data.score, data.time, data.username);
                }
            } else {
                console.error('Error requesting scores');
            }
            this.controller.showScore(score);
        }
        request.send();
    }
}