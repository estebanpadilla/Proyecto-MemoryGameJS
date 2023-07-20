import { ControllerView } from "../controllerView.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'scoresView';
    }

    showScores(scores) {
        scores.forEach(score => {
            let scoreView = new ScoreView(this.elementsContainer, score);
        });
    }
}