import { THEME_FACES, THEME_FLAGS, THEME_FOOD, THEME_ANIMALS } from "../../libs/constants.js";
import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class ThemesView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'themesView';

        div({ innerHTML: 'Faces', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_FACES) }, this.elementsContainer);

        div({ innerHTML: 'Food', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_FOOD) }, this.elementsContainer);

        div({ innerHTML: 'Flags', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_FLAGS) }, this.elementsContainer);

        div({ innerHTML: 'Animals', className: 'game-button', onclick: this.onButtonClick.bind(this, THEME_ANIMALS) }, this.elementsContainer);
    }

    onButtonClick(theme) {
        var event = new CustomEvent('save-theme', {
            detail: {
                theme: theme,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}