'use strict';

var xcbj2Top = $('.xcbj2').offset().top;

$(window).on('scroll', function () {
  var wtop = $(window).scrollTop();
  if (wtop > xcbj2Top - 20) {
    $('.xcbj2').addClass('fixed');
  } else {
    $('.xcbj2').removeClass('fixed');
  }
});

$('.cro>.list').on('click', '.item', function (e) {
  var t = $(e.delegateTarget);
  t.parent().find('.text').text($(this).text());
  t.removeClass('active');
  return false;
});

$('.cro').on('click', function () {
  $(this).find('input').prop('checked', true);
  $(this).find('.text').addClass('active');
  if (!$(this).find('.list').hasClass('active')) {
    $(this).find('.list').addClass('active');
  } else {
    $(this).parent().find('.list').removeClass('active');
  }
  return false;
});
// $('.cro>.text').on('click',function(){
//       $(this).parent().find('.list').toggleClass('active')
//       if($('.cro>.list').hasClass('active')){
//         $(this).parent().find('.list').show()
//         $(this).parent().addClass('active')
//       }else{
//         $(this).parent().find('.list').hide()
//         $(this).parent().removeClass('active')
//       }
// })
$(document).on('click', function () {
  $('.cro>.list').removeClass('active');
});
$('.sp>.m-xcbj-rd').on('click', 'input', function () {
  $(this).parents('.sp').find('.cro>.text').removeClass('active');
});

// 2017 10 18 车型图片列表
$('.mt-list>.item>.li>.txt').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
$('.mt-list>.item>.li>.txt').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
$('.mt-list>.item>.li>.txt img').on('click', function () {
  $(this).parents('.txt').removeClass('active');
  return false;
});

// 2017 10 18 经销商地图
$('.city-chose').on('click', '.cl', function () {
  $(this).next().show().siblings('ul').hide();
  $('.city-chose').find('.dealers').hide();
  return false;
});
$('.city-chose').on('click', '.city-l', function () {
  $(this).find('.dealers').show();
  $('.city-chose').find('ul').hide();
  return false;
});
$(document).on('click', function () {
  $('.city-chose').find('ul').hide();
  $('.city-chose').find('.dealers').hide();
});
$('.dealers').on('click', '.item', function () {
  $(this).parent().hide();
  return false;
});
$('.babel').on('click', 'i', function () {
  $(this).parent().remove();
  if ($('.babel').find('.item').length < 1) {
    $('.cler').hide();
  }
});
$('.cler').on('click', function () {
  $('.babel').empty();
  $(this).hide();
  return false;
});