export default class Progressbar {
    static render(percents = 0) {
        return `
            <div class="fready-progress">
                <div class="fready-progress-bar">
                    <div style="width: ${percents}%"></div>
                    
                </div>
                <div class="fready-progress-percent">${Number(percents).toFixed(0)}%</div>
            </div>
            `;
    }
}