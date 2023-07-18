import { ControllerView } from "../controllerView.js";

export class ScoresView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'scoresView';
    }
}