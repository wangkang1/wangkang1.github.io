$('.counter').countUp(); //数字动态变化插件

$('.lojump').click(function(){
  localStorage.setItem('mode','0')
})
//初始化状态name==1显示未完成 name==0显示领取奖励按钮
for (var i = 1; i < $('.duty_center li').length; i++) {

  if ($('.duty_center li')[i].getAttribute('name') == "1") {
    $('.award').eq(i - 1).after('<i >未完成</i>')
  } else {
    $('.award').eq(i - 1).after('<button>领取奖励</button>')
  }
}
$('.hwrap').mousemove(function () {
  $('.duty_center').show()
})
$('.hwrap').mouseleave(function () {
  $('.duty_center').hide(300)
})

//点击获取奖励
$('.duty_center button').click(function () {
  $(this).after('<span class="receive">已领取<span>')
  $(this).remove();
  $(".shade").show();
  setTimeout(function () {
    $(".shade").hide()
  }, 1000)

})

var jiny = 180//当前经验
var zjiny = 1860 //总经验
//弹框经验进度条逻辑
if (jiny / zjiny == 1) {
  $(".mprocess").css("width", 0)
  // 要升一级
} else {
  $(".mprocess").css("width", 184 - jiny / zjiny * 184)
  $(".mprocess").css("left", jiny / zjiny * 184 + "px")
}

