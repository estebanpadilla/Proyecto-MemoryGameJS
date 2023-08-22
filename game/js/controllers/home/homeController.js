import { Controller } from "../controller.js";
import { HomeService } from "./homeService.js";
import { HomeView } from "./homeView.js";

export class HomeController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new HomeView(this, parent);
        this.service = new HomeService(this);
        this.service.getScore();
    }

    refresh() {
        this.service.getScore();
    }

    goto(state) {
        this.gameManager.goto(state);
    }

    showScore(score) {
        this.view.showScore(score);
    }
}