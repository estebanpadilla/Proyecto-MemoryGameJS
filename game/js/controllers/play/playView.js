import { div, p } from "../../libs/html.js";
import { CardView } from "../../views/cardView.js";
import { ControllerView } from "../controllerView.js";

export class PlayView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playView';
        this.elementsContainer.className = 'playView-elementsContainer';
        this.hudContainer = div({ className: 'playView-hudContainer' }, this.elementsContainer);
        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this.elementsContainer);

        this.clicksText = p({ innerHTML: 'Clicks: 0', className: 'playView-text' }, this.hudContainer);
        this.timerText = p({ innerHTML: 'Time: 0', className: 'playView-text' }, this.hudContainer);
        this.resetBtn = div({
            innerHTML: 'Reset', className: 'game-button playView-resetBtn', onclick: this.
                onResetBtn.bind(this)
        }, this.hudContainer);

        this.completeContainer = div({ className: 'playView-completeContainer hidden' }, this.elementsContainer);
        this.completeClicksText = p({ innerHTML: 'Clicks: 0', className: 'playView-text playView-completeText' }, this.completeContainer);
        this.completeTimeText = p({ innerHTML: 'Time: 0', className: 'playView-text playView-completeText' }, this.completeContainer);
        this.completeScoreText = p({ innerHTML: 'Score: 0', className: 'playView-text playView-completeText' }, this.completeContainer);
        div({ innerHTML: 'Play Again', className: 'game-button playView-playAgainBtn spaceTop-10', onclick: this.onPlayAgainBtn.bind(this) }, this.completeContainer);
    }

    showGameComplete(clicks, time) {
        this.cardsContainer.innerHTML = '';
        this.completeClicksText.innerHTML = `Clicks: ${clicks}`;
        this.completeTimeText.innerHTML = `Time: ${time}`;
        this.completeScoreText.innerHTML = `Score: ${clicks + time}`;
        this.completeContainer.classList.remove('hidden');
    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            let cardView = new CardView(this.cardsContainer, card);
        });
    }

    onPlayAgainBtn() {
        this.completeContainer.classList.add('hidden');
        this.controller.resetGame();
    }

    onResetBtn() {
        this.controller.resetGame();
    }

    updateHUD(clicks, time) {
        this.clicksText.innerHTML = `Clicks: ${clicks}`;
        this.timerText.innerHTML = `Time: ${time}`;
    }
}