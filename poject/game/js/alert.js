var alerts = function (param) {
  var title = param.title,
    content = param.content,
    btn = param.btn;
    time=param.time||1000
  var htm = "";
  htm += '<div class="lacy-alert"><div class="bgd">';
  if (title) htm += '<header class="hd">' + title + '</header>';
  htm += '<div class="bd">' + content + '</div></div>';
  if (btn) {
    htm += '<footer class="fd">' +
      '<a href="#" class=" alert-btn alert-btn-lg" data-role="closeBtn" id="yes_long_btn">' + '</a>' +
      '</footer>';
    htm += '</div>';
  } else {
    htm += '</div>';
  }
  $("body").append(htm);
  var al = $(".lacy-alert");
  if (!btn) {
    setTimeout(function () {
      $(".lacy-alert").remove();
    }, time);
  } else {
    al.on("click", '[data-role="closeBtn"]', function () {
      $(".lacy-alert").remove();
    });

    $("#yes_btn,#yes_long_btn").bind("click", function () {
      $(".lacy-alert").remove();
      if (param.yesFn) {
        param.yesFn();
      }
      param = {};
    });
  }

}