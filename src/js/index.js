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
        document.getElementsByClassName('shadow')[0].className = 'inactive';
        this._resize();
        this._initEvent();
        window.onload = this._preloaderSeq;
    }

    _initEvent() {
        document.addEventListener('click', () => {
            document.body.classList.remove('animation-lock');
            this.n++;
            this.n >= this.nameArr.length && (this.n = 0);
            document.body.classList.remove(this.nameArr[this.n - 1]);
            document.body.classList.add(this.nameArr[this.n]);
            setTimeout(function () {
                document.body.classList.add('animation-lock');
            }, 2300)
        });
        window.onresize = this._resize.bind(this);
        this._setStateX();
        this._setState_X();
        this._setShimmer();
    }

    _resize() {
        let w = window.innerWidth * .9;
        let h = w * (2 / 3);
        this.e.style.width = w + 'px';
        this.e.style.height = h + 'px';
    }

    _preloaderSeq() {
        let b = document.body;
        b.classList.add('animation-lock');
        // setTimeout(function () {
        //     b.classList.add('ready');
        //     b.classList.remove('preloader');
        //     setTimeout(function () {
        //         b.classList.add('preAni');
        //         setTimeout(function () {
        //             b.classList.remove('ready');
        //             b.classList.remove('preAni');
        //         }, 10000)
        //     }, 5000)
        // }, 3000);
    }

    _setStateX() {
        let b = document.body;
        setInterval(function () {
            b.classList.remove("state3");
            setTimeout(function () {
                b.classList.add("state1");
            }, 1000);
            setTimeout(function () {
                b.classList.remove("state1");
                b.classList.add("state2");
            }, 2500);
            setTimeout(function () {
                b.classList.remove("state2");
                b.classList.add("state3");
            }, 3500)
        }, 5000)
    }
    _setState_X() {
        setInterval(function() {
            let b = document.body;
            setTimeout(function() {
                b.classList.add("state-1");
            }, 700);
            setTimeout(function() {
                b.classList.remove("state-1");
            }, 1400);
            setTimeout(function() {
                b.classList.add("state-1");
            }, 1800);
            setTimeout(function() {
                b.classList.remove("state-1");
            }, 2400);
        }, 3000)
    }
    _setShimmer() {
        let b = document.body;
        setInterval(function() {
            setTimeout(function() {
                b.classList.add("shimmer")
            }, 2000);
            setTimeout(function() {
                b.classList.remove("shimmer")
            }, 6000);
        }, 7000)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let ss = new Pieces('show-stage');
    ss.init();
});
