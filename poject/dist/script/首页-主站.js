'use strict';

$('.dropmenubtn').on('click', function () {
  var $el = $(this);
  $el.toggleClass('active');
  $('.dropmenu').toggle();
  if ($el.hasClass('active')) {
    $('.dropmenu>.m-scroll').sscroll('update');
  }
});

$('.dropmenu>div').on('click', '.item', function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});