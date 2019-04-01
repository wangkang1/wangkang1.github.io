'use strict';

var a = false;
$('.car-compare>.left>.left-nav').on('click', 'label>.item-m', function () {
  $('.car-compare>.left>.left-nav>label').each(function () {
    $(this).find('input').parent().removeClass('active');
  });
  $(this).parent().addClass('active');
  a = true;
  var oIndex = $(this).parent().index();
  var h = 673;
  var t = 15;
  for (var i = 0; i < oIndex; i++) {
    h += $('.carcompare-lists .list-con').eq(i).height();
    t += 2;
  }
  $('body').animate({ scrollTop: h > 673 ? h + t : 673 }, 200);
});
$(window).on('mousewheel ', function () {
  a = false;
});
$('.car-editor').hide();
$(window).scroll(function () {
  var h = $(window).scrollTop();
  var oTop = 673;
  var oIn = 0;
  if (h >= 673) {
    $('.car-compare>.left').addClass('pos-left');
    $('.car-editor').show();
  } else {
    $('.car-compare>.left').removeClass('pos-left');
    $('.car-editor').hide();
  }
  function oHeight(num) {
    var oH = 0;
    for (var i = 0; i < num; i++) {
      oH += $('.carcompare-lists .list-con').eq(i).height();
    }
    return oH;
  }
  if (!a) {
    for (var i = 0; i < 15; i++) {
      if (h > oHeight(i) + oTop) {
        oIn = i;
      }
    }
    $('.car-compare>.left>.left-nav>label').each(function () {
      $(this).find('input').parent().removeClass('active');
    });
    $('.car-compare>.left>.left-nav>label').eq(oIn).find('input').parent().addClass('active');
    a = false;
  }
});

// $('.prev').on('click',function(){
//   var This= $(this).parent().prev();
//   var oIndex=This.parent().index();
//   if(This.hasClass('tarn')){
//     This.removeClass('tarn')
//   }
//   else{
//     This.addClass('tarn')
//   }
//   if($('.s-right').find('.list').eq(oIndex-1).find('.con-li').attr('translateX','-'+oIndex*240+'')){
//     $('.s-right').find('.list').eq(oIndex-1).find('.con-li').removeClass('tarp')
//   }
//     else{
//       $('.s-right').find('.list').eq(oIndex-1).find('.con-li').addClass('tarp')
//   }

// })

// $('.next').on('click',function(){
//   var This= $(this).parent().prev();
//   var oIndex=This.parent().index();
//   if(This.hasClass('tarp')){
//     This.removeClass('tarp')
//   }else{
//     This.addClass('tarp')
//   }
//   if($('.s-right').find('.list').eq(oIndex+1).find('.con-li').hasClass('tarn')){

//     $('.s-right').find('.list').eq(oIndex+1).find('.con-li').removeClass('tarn')
//   }else{
//     $('.s-right').find('.list').eq(oIndex+1).find('.con-li').addClass('tarn')
//   }


// })
// $('.next').on('click',function(){
//   var oIndex= $(this).parent().prev().attr('class').split(' ')[1].substring(2)
//   var i=$(this).parent().prev().parent().index()
//   $('.s-right').find('.list').eq(oIndex+1).find('.con-li').css('transform',"translateX"+"("+(-(parseInt(i+1)*240))+"px)")
//   $('.s-right').find('.list').eq(oIndex).find('.con-li').css('transform',"translateX"+"("+((parseInt(i+1)*240))+"px)")
// })