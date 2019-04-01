'use strict';

var $titles = $('.m-left>.titles>.s-title');

$titles.click(function () {
  var $el = $(this);
  if (!$el.hasClass('active')) {
    $titles.removeClass('active');
    $el.addClass('active');
  }
});