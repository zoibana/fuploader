export default class Button {

    static primary(label, tag = 'button') {
        let button = this.render(label, tag);
        button.classList.add('fready-button-primary');
        return button;
    }

    static secondary(label, tag = 'button') {
        let button = this.render(label, tag);
        button.classList.add('fready-button-secondary');
        return button;
    }

    static render(label, tag = 'button') {
        let button = document.createElement(tag);
        button.classList.add('fready-button');
        button.innerHTML = label;
        return button;
    }
}