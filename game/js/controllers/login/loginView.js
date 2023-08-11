import { div, input } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";

export class LoginView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginView';
        this.elementsContainer.className = 'loginView-elementsContainer';

        this.usernameIn = input({ placeholder: 'Username', className: 'loginView-usernameIn' }, this.elementsContainer);
        this.okBtn = div({ innerHTML: 'OK', className: 'game-button spaceTop-10', onclick: this.onOkBtn.bind(this) }, this.elementsContainer);
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