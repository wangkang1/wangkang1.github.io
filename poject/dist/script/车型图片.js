'use strict';

//幻灯片
function imgTab() {
  var len = $('.tab-img .list .item').length;
  var i = 0;
  $('.tab-img').on('click', '#next,.next', function () {
    i++;
    if (i >= len) {
      i == len;
      return;
    }
    var b = Math.floor(i / 9);
    $('.con ul').animate({ left: -(b * 1080) + "px" });
    $('.tab-img .list .item').hide().eq(i).show();
    $('.con ul li').removeClass('active').eq(i).addClass('active');
  });
  $('.tab-img').on('click', '#prev,.prev', function () {
    i--;
    if (i < 0) {
      i = 0;
      return;
    }
    var b = Math.floor(i / 9);
    $('.con ul').animate({ left: -(b * 1080) + "px" });
    $('.tab-img .list .item').hide().eq(i).show();
    $('.con ul li').removeClass('active').eq(i).addClass('active');
  });
  $('.con>ul li').on('click', function () {
    var oIndex = $(this).index();
    i = oIndex;
    $('.tab-img .list .item').hide().eq(i).show();
    $(this).addClass('active').siblings().removeClass('active');
  });
}
imgTab();

//tab

$('.a-time,.a-type').on('click', function (e) {
  e.stopPropagation();
  $('.a-time,.a-type').find('.list').removeClass('active');
  $('.a-time,.a-type').find('.btn').removeClass('active');
  $(this).find('.list').toggleClass('active');
});

function fn() {
  $('.tab .a-l').on('click', '.list a', function (e) {
    e.stopPropagation();
    var cu = $(e.delegateTarget);
    var txt = $(this).text();
    cu.find('.list').toggleClass('active');
    cu.find('.txt').text(txt);
  });
}
fn();
$(document).on('click', function () {
  $('.tab .a-l').find('.list').removeClass('active');
});