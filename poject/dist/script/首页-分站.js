'use strict';

$('.m-topsearch>.list>.l0').on('click', '.item', function () {
  var c = this.innerText;
  var $l1 = $('.m-topsearch>.list>.l1');
  var top = void 0;
  if (c == 'A') {
    top = 0;
  } else {
    var $start = $('.m-topsearch>.list>.l1>.split[data-start=' + c + ']');
    top = $start.position().top + $l1.scrollTop() + 3;
  }
  $l1.scrollTop(top);
});

$('.m-topsearch>.drop').on('click', function () {
  $(this).toggleClass('active');
  $('.m-topsearch>.list').toggle();
});