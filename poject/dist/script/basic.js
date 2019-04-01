'use strict';

var sleep = function sleep(t) {
  return new Promise(function (r) {
    return setTimeout(r, t);
  });
};

$.fn.stab = function () {
  this.each(function (_, el) {
    var $el = $(el);
    var $titles = $el.find('>.titles');
    var $view = $el.find('>.views>.view');
    var $title = $el.find('>.titles>.title');
    var len = $title.length;
    var current = 0;
    var old = 0;
    var lock = false;
    var autorun = $el.data('autorun');
    var tabhover = $el.data('tabhover');
    var slide = $el.data('slide');
    var changeTab = function changeTab() {
      if (!slide) {
        $view.hide();
        $view.eq(current).show();
      } else {
        lock = true;
        var $o = $view.eq(old);
        var $c = $view.eq(current);
        $o.addClass('after');
        $c.addClass('pre');
        $c.show();
        sleep(20).then(function () {
          return $c.removeClass('pre');
        });
        sleep(1000).then(function () {
          $o.hide();
          $o.removeClass('after');
          lock = false;
        });
      }
      $title.removeClass('active');
      $title.eq(current).addClass('active');
    };
    var ev = function ev(e) {
      if (lock) return;
      var $el = $(e.currentTarget);
      if ($el.hasClass('active')) return;
      old = current;
      current = $title.index($el);
      changeTab();
    };
    $titles.on('click', '>.title', ev);
    if (tabhover) {
      $titles.on('mouseenter', '>.title', ev);
    }
    if (autorun) {
      setInterval(function () {
        if (lock) return;
        old = current;
        current++;
        current >= len && (current = 0);
        changeTab();
      }, autorun);
    }
  });
};

$.fn.sscroll = function (cmd) {
  this.each(function (_, el) {
    var $el = $(el);
    var $bar = void 0,
        $scroll = void 0,
        h = void 0,
        sh = void 0;
    var update = function update() {
      h = $el.height();
      sh = el.scrollHeight;
      if (sh > h) {
        $scroll.show();
        var percent = h / sh;
        var barh = percent * h;
        $bar.height(barh);
      } else {
        $scroll.hide();
      }
    };
    if (!cmd) {
      $scroll = $('<div class="scroll"></div>');
      $bar = $('<div class="bar"></div>');
      $scroll.append($bar);
      $el.append($scroll);
      $el.scroll(function () {
        var st = $el.scrollTop();
        sh = el.scrollHeight;
        $scroll.css('top', st);
        $bar.css('top', st / sh * h);
      });
      $el.on('mousewheel', function (e) {
        var st = $el.scrollTop();
        sh = el.scrollHeight;
        var d = e.originalEvent.deltaY;
        if (st == 0 && d < 0 || st + h == sh && d > 0) {
          e.preventDefault();
        }
      });
    } else {
      $scroll = $el.find('>.scroll');
      $bar = $el.find('>.scroll>.bar');
      update();
    }
    update();
  });
};

$('.m-tab').stab();
$('.m-scroll').sscroll();

$(document).on('click', function () {
  $('.m-dropdown2').find('.list').removeClass('active');
  $('.m-dropdown2').find('.btn').removeClass('active');
});

$('.m-dropdown2').on('click', function (e) {
  e.stopPropagation();
  $('.m-dropdown2').find('.list').removeClass('active');
  $('.m-dropdown2').find('.btn').removeClass('active');
  $(this).find('.list').toggleClass('active');
  $(this).find('.btn').toggleClass('active');
});

$('.m-dropdown2').on('click', '.list>.item', function (e) {
  e.stopPropagation();
  var p = e.currentTarget.innerText;
  var t = $(e.delegateTarget);
  t.find('.list').toggleClass('active');
  t.find('.btn').toggleClass('active');
  t.find('.text').text(p);
});

// $('.m-navbar').on('mouseenter', '>.item', function(){
//   let nv = $(`.m-nv2item[data-nv2=${this.innerText}]`)
//   if(nv.length > 0){
//     $(this).addClass('expand')
//     nv.css('display', 'flex')
//   }
// })

// $('.m-navbar').on('mouseleave', '>.item', function(){
//   $(this).removeClass('expand')
//   $(`.m-nv2item[data-nv2=${this.innerText}]`).hide()
// })

// $('.m-nv2item').on('mouseenter', function(){
//   $(`[data-nh=${$(this).data('nv2')}]`).addClass('expand')
//   $(this).show()
// })

// $('.m-nv2item').on('mouseleave', function(){
//   $(`[data-nh=${$(this).data('nv2')}]`).removeClass('expand')
//   $(this).hide()
// })

$('.dropdown').on('mousedown', '.list>.item', function (e) {
  var t = e.currentTarget.innerHTML;
  var p = $(e.delegateTarget);
  p.find('button>.texts').html(t);
});

$('.m-tab').on('click', '.vide', function () {
  $('.vedio-info').find('video')[0].play();
});

$('.m-tab').on('dblclick', '.vide', function () {
  location.href = "视频-正文.html";
});