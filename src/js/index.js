/**
 * Created by Moudi on 2017/2/25.
 */

//载入css
require('../css/main.scss');
let data = require('./data.js');

class Pieces {
  constructor(id) {
    this.$e = $('#' + id);
    this.nameArr = data.animalList;
    this.n = -1;
    this.$startBtn = $('#start');
    this.init();
  }

  init() {
    this._resize();
    this._initEvent();
    window.onload = () => {
      // this._preloaderSeq();
      this._dev();
    }
  }

  _dev() {
    $(document.body).removeClass('preloader').addClass('title');
    setTimeout(function () {
      $(document.body).addClass('show-title');
    }, 2000);
  }

  _initEvent() {
    window.onresize = this._resize.bind(this);
    this._setStateX();
    this._setState_X();
    this._setShimmer();
    this.$startBtn.click(() => {
      $('.intro-content').fadeOut(300, () => {
        $(document.body).removeClass('show-title');
      });
      $(document.body).removeClass('title');
      $('.nav').show(200);
      $('.next').on('click', () => {
        $(document.body).removeClass('animation-lock');
        this.n++;
        this.n >= this.nameArr.length && (this.n = 0);
        $('#animal-name').text(data.translatedAnimalNames[this.n]);
        $(document.body).removeClass(this.nameArr[this.n - 1]).addClass(this.nameArr[this.n]);
        setTimeout(() => {
          $(document.body).addClass('animation-lock');
        }, 2000)
      });
    })
  }

  _resize() {
    let w = $(window).innerWidth() * .9;
    let h = w * (2 / 3);
    this.$e.width(w);
    this.$e.height(h);
  }

  //TODO: preloader sequence
  _preloaderSeq() {
    let b = $(document.body);
    setTimeout(() => {
      b.addClass('ready').removeClass('preloader');
      $('.loading-progress').addClass('active');
      this._introSeq();
      setTimeout(() => {
        b.addClass('preAni');
        setTimeout(() => {
          b.removeClass('preAni');
          setTimeout(() => {
            b.removeClass('ready').addClass('title');
            setTimeout(() => {
              b.addClass('show-title');
            }, 2000);
          }, 2300);
        }, 10000);
      }, 4500);
    }, 3000);
  }

  _introSeq() {
    let $ps = $('.loading-intro').find('p');
    $($ps[0]).addClass('show');
    setTimeout(() => {
      $($ps[0]).removeClass('show');
      $($ps[1]).addClass('show');
      setTimeout(() => {
        $($ps[1]).removeClass('show');
        $($ps[2]).addClass('show');
        setTimeout(() => {
         $($ps[2]).removeClass('show');
          $($ps[3]).addClass('show');
          setTimeout(() => {
            $($ps[3]).removeClass('show');
          }, 4000)
        }, 4000)
      }, 4000)
    }, 4000)
  }

  _setStateX() {
    let b = $(document.body);
    setInterval(() => {
      b.removeClass("state3");
      setTimeout(() => {
        b.addClass("state1");
      }, 1000);
      setTimeout(() => {
        b.removeClass("state1").addClass("state2");
      }, 2500);
      setTimeout(() => {
        b.removeClass("state2").addClass("state3");
      }, 3500)
    }, 5000)
  }

  _setState_X() {
    setInterval(() => {
      let b = $(document.body);
      setTimeout(() => {
        b.addClass("state-1");
      }, 1000);
      setTimeout(() => {
        b.removeClass("state-1");
      }, 1500);
      setTimeout(() => {
        b.addClass("state-1");
      }, 1900);
      setTimeout(() => {
        b.removeClass("state-1");
      }, 2500);
    }, 3000)
  }

  _setShimmer() {
    let b = $(document.body);
    setInterval(() => {
      setTimeout(() => {
        b.addClass("shimmer")
      }, 2000);
      setTimeout(() => {
        b.removeClass("shimmer")
      }, 6700);
    }, 7000)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let ss = new Pieces('show-stage');
});
