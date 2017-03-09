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
    this.init();
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
    this._resize();
    this._initEvent();
    window.onload = () => {
      this._preloaderSeq();
      // this._dev();
    }
  }

  _dev() {
    document.body.classList.remove('preloader');
    document.body.classList.add('title');
    setTimeout(function () {
      document.body.classList.add('show-title');
    }, 2000);
  }

  _initEvent() {
    document.addEventListener('click', () => {
      document.body.classList.remove('animation-lock');
      this.n++;
      this.n >= this.nameArr.length && (this.n = 0);
      document.body.classList.remove(this.nameArr[this.n - 1]);
      document.body.classList.add(this.nameArr[this.n]);
      setTimeout(() => {
        document.body.classList.add('animation-lock');
      }, 2000)
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

  //TODO: preloader sequence
  _preloaderSeq() {
    let b = document.body;
    setTimeout(() => {
      b.classList.add('ready');
      b.classList.remove('preloader');
      this._introSeq();
      setTimeout(() => {
        b.classList.add('preAni');
        setTimeout(() => {
          b.classList.remove('preAni');
          setTimeout(() => {
            b.classList.remove('ready');
            b.classList.add('title');
            setTimeout(() => {
              b.classList.add('show-title');
            }, 2000);
          }, 2300);
        }, 10000);
      }, 4500);
    }, 3000);
  }

  _introSeq() {
    let intro = document.getElementsByClassName('loading-intro')[0];
    let ps = intro.getElementsByTagName('p');
    ps[0].classList.add('show');
    setTimeout(() => {
      ps[0].classList.remove('show');
      ps[1].classList.add('show');
      setTimeout(() => {
        ps[1].classList.remove('show');
        ps[2].classList.add('show');
        setTimeout(() => {
          ps[2].classList.remove('show');
          ps[3].classList.add('show');
          setTimeout(() => {
            ps[3].classList.remove('show');
          }, 4000)
        }, 4000)
      }, 4000)
    }, 4000)
  }

  _setStateX() {
    let b = document.body;
    setInterval(() => {
      b.classList.remove("state3");
      setTimeout(() => {
        b.classList.add("state1");
      }, 1000);
      setTimeout(() => {
        b.classList.remove("state1");
        b.classList.add("state2");
      }, 2500);
      setTimeout(() => {
        b.classList.remove("state2");
        b.classList.add("state3");
      }, 3500)
    }, 5000)
  }

  _setState_X() {
    setInterval(() => {
      let b = document.body;
      setTimeout(() => {
        b.classList.add("state-1");
      }, 1000);
      setTimeout(() => {
        b.classList.remove("state-1");
      }, 1500);
      setTimeout(() => {
        b.classList.add("state-1");
      }, 1900);
      setTimeout(() => {
        b.classList.remove("state-1");
      }, 2500);
    }, 3000)
  }

  _setShimmer() {
    let b = document.body;
    setInterval(() => {
      setTimeout(() => {
        b.classList.add("shimmer")
      }, 2000);
      setTimeout(() => {
        b.classList.remove("shimmer")
      }, 6000);
    }, 7000)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let ss = new Pieces('show-stage');
});
