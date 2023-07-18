import { div, input } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class LoginView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'loginView';

        this.usernameIn = input({ placeholder: 'Username', className: 'loginView-usernameIn' }, this.elementsContainer);
        this.okBtn = div({ innerHTML: 'OK', className: 'game-button', onclick: this.onOkBtn.bind(this) }, this.elementsContainer);
    }

    onOkBtn() {
        let username = this.usernameIn.value;

        if (username !== '') {
            let event = new CustomEvent('username-entered', {
                detail: {
                    username: username,
                },
                bubbles: true,
                cancelable: true,
                composed: false,
            });
            this.container.dispatchEvent(event);
        } else {

        }
    }
}