import { Score } from "../../models/score.js";
import { Service } from "../service.js";

export class ScoresService extends Service {
    constructor(controller) {
        super(controller);
    }

    getScores() {
        var scores = [];
        var url = `https://esteban-memory-game.vercel.app/scores`;
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                data.forEach(scoreData => {
                    let score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                });
            } else {
                console.error('Error requesting scores');
            }
            this.controller.showScores(scores);
        }
        request.send();
    }
}