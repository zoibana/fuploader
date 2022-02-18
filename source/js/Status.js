import Icon from "./Icon";

export default class Status {
    static success(message) {
        return `
                <div class="fready-status success">
                    ${Icon.check()}
                    <span>${message}</span>
                </div>
            `;
    }

    static error(message) {
        return `
                <div class="fready-status error">
                    ${Icon.warning()}
                    <span>${message}</span>
                </div>
            `;
    }

    static warning(message) {
        return `
                <div class="fready-status warning">
                    ${Icon.warning()}
                    <span>${message}</span>
                </div>
            `;
    }
}