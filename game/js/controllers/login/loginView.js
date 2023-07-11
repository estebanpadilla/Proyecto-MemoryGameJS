import { View } from "../view.js";

export class LoginView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'loginView';

        var okBtn = document.createElement('div');
        this.elementsContainer.appendChild(okBtn);
        okBtn.innerHTML = 'OK';
        okBtn.className = 'game-button';
    }
}