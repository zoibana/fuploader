export default class Progressbar {
    static render(percents = 0) {
        return `
                <div class="fready-progress-bar">
                    <div style="width: ${percents}%"></div>
                </div>
            `;
    }
}