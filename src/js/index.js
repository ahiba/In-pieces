/**
 * Created by Moudi on 2017/2/25.
 */

//载入css
require('../css/main.scss');


class Pieces {
    constructor(id) {
        this.e = document.getElementById(id);
    }

    init() {
        let eleHTML = `
            <div class="wrapper">
                <div class="pieces"></div>
            </div>
        `;
        let ehtml = '';
        for (let i = 0; i < 30; i++) {
            ehtml += eleHTML;
        }
        this.e.innerHTML = ehtml;
    }
}
window.onload = function () {
    let ss = new Pieces('show-stage');
    ss.init();
};
