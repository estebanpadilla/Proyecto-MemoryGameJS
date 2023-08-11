import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";
import { div, img, p } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class HomeView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'homeView';
        this.elementsContainer.className = 'homeView-elementsContainer';

        img({ src: './src/images/logo.svg', className: 'homeView-logo' }, this.elementsContainer);
        p({ innerHTML: 'Can you beat this?', className: 'game-text' }, this.elementsContainer);
        div({ innerHTML: 'Scores Data', className: 'homeView-scores-widget' }, this.elementsContainer);

        p({ innerHTML: 'Are you ready?', className: 'game-text homeView-game-text' }, this.elementsContainer);

        var playBtn = div({ innerHTML: 'Play', className: 'game-button homeView-button-play', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.elementsContainer);

        p({ innerHTML: `Let's check other things!`, className: 'game-text homeView-game-text' }, this.elementsContainer);
        var buttonsContainer = div({ className: 'homeView-buttonContainer' }, this.elementsContainer);
        var creditsBtn = div({ innerHTML: 'Credits', className: 'game-button homeView-button', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, buttonsContainer);
        var scoresBtn = div({ innerHTML: 'Scores', className: 'game-button homeView-button', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, buttonsContainer);
        var themesBtn = div({ innerHTML: 'Themes', className: 'game-button homeView-button', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, buttonsContainer);
        var difficultyBtn = div({ innerHTML: 'Difficulty', className: 'game-button homeView-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE) }, buttonsContainer);

        var loginBtn = div({ innerHTML: 'Login', className: 'game-button game-button-login', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.elementsContainer);

        this.fadeContainer.classList.add('hidden');
    }

    onButtonClick(state) {
        var event = new CustomEvent('home-button-click', {
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}