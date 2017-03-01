/**
 * Created by Moudi on 2017/2/25.
 */

//载入css
require('../css/main.scss');


class Pieces {
    constructor(id) {
        this.e = document.getElementById(id);
        this.nameArr = ['crow', 'vaquita', 'kakapo', 'ostrich', 'parrotfish', 'penguin', 'iguana', 'peccary', 'drill', 'oryx', 'owl', 'tapir', 'frog', 'seahorse', 'camel', 'butterfly', 'sloth', 'armadillo', 'damselfly', 'loris', 'echidna', 'bear', 'lynx', 'hirola', 'okapi', 'sifaka', 'panda', 'rhino', 'tamarin', 'turtle'];
        this.n = 0;
    }
    init() {
        let eleHTML = `
            <div class="wrapper">
                <div class="pieces"></div>
            </div>
        `;
        let eleHTMLExtra = `
            <div class="wrapper extra">
                <div class="pieces"></div>
            </div>
        `;
        let eleHTMLShadow = `<div class="shadow"></div>`;
        let ehtml = '';
        for (let i = 0; i < 30; i++) {
            ehtml += eleHTML;
        }
        for (let i = 0; i < 3; i++) {
            ehtml += eleHTMLExtra;
        }
        ehtml += eleHTMLShadow;
        this.e.innerHTML = ehtml;
        document.body.className = this.nameArr[this.n];
        this._resize();
        this._initEvent();
    }
    _initEvent() {
        document.addEventListener('click', () => {
            this.n++;
            this.n >= this.nameArr.length && (this.n = 0);
            document.body.className = this.nameArr[this.n];
        });
        window.onresize =  () => {
            this._resize();
        };
    }
    _resize() {
        let w = window.innerWidth * .9;
        let h = w * (2/3);
        this.e.style.width = w + 'px';
        this.e.style.height = h + 'px';
    }
}
window.onload = function () {
    let ss = new Pieces('show-stage');
    ss.init();
};