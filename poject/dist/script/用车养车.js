'use strict';

var $imgs = $('.project>.left>img:not(:first-child)');

$('.project>.right>.x-item_name>.x-chose>label>input').change(function () {
    $imgs.eq(parseInt(this.value - 1)).css('display', this.checked ? 'block' : 'none');
});

$('.project>.right .x-chose>button').click(function () {
    $(this).toggleClass('active');
    var s = $(this).hasClass('active');
    $('.project>.right>.x-item_name>.x-chose>label>input').prop('checked', s);
    $imgs.toggle(s);
});

$('.good-list>.table').on('click', 'tr td.select', function () {
    var $select = $('.ycyc0>.right>.material-select');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $select.hide();
    } else {
        $('.good-list>.table>tbody>tr td.select').removeClass('active');
        $(this).addClass('active');
        $select.show();
    }
});

// let $names = $('.car-compare>.left>.left-nav>label>.item-m>.name')
// let $title = $('.right>.details>.carcompare-lists>.th')

// $('.car-compare>.left>.left-nav').on('change','label>input',function(){
//     let n = $names.eq(parseInt(this.value)).text()
//     $title.text(n)
//     $('.right>.details>.carcompare-lists').show()
// })
var typecar = [];
var txt = '';
function list() {
    $('.choser-car>.list').empty();
    $.each(typecar, function (i, v) {
        var oHtml = '<div class="cho"><span>' + v + '</span><div class="ico"></div></div>';
        $('.choser-car>.list').append(oHtml);
    });
}
$('.tab-nav .item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).text() == "车型搜索") $('.cont-main').animate({ marginLeft: '-742px' });else $('.cont-main').animate({ marginLeft: '0' });
});

$('.cont-car>.tab-con').on('click', '.type-car li', function () {
    $('.tab-con:eq(0)').removeClass('active');
    $('.tab-con:eq(1)').addClass('active');
    typecar.push($(this).text());
    list();
});
$('.choes-list').on('click', '.car-type>ul li', function () {
    $('.tab-con:eq(1)').removeClass('active');
    $('.tab-con:eq(2)').addClass('active');
    typecar.push($(this).text());
    list();
});
$('.choes-list').on('click', '.displace>ul li', function () {
    $('.tab-con:eq(2)').removeClass('active');
    $('.tab-con:eq(3)').addClass('active');
    typecar.push($(this).text());
    list();
});
$('.choes-list').on('click', '.car-time>ul li', function () {
    $('.tab-con:eq(3)').removeClass('active');
    $('.tab-con:eq(4)').addClass('active');
    typecar.push($(this).text());
    list();
    $.each(typecar, function (i, v) {
        txt += v + ' ';
        $('.ch-res>.txt').text(txt);
        $('.project>.head>.val').text(txt);
    });
    setTimeout(function () {
        if (localStorage.tp == '维修保养') window.location.href = "用车养车-维护修养.html";else {
            window.location.href = "用车养车-钣喷做漆.html";
        }
    }, 500);
});

$('.choser-car>.list').on('click', '.ico', function () {
    var index = typecar.indexOf($(this).prev().text());
    typecar.splice(index);
    $('.tab-con:eq(' + index + ')').addClass('active').siblings().removeClass('active');
    list();
});
$('.b-close').on('click', function () {
    $('.carselect-pop').hide();
});

$('.project>.head>a').on('click', function () {
    $('.carselect-pop').show();
});
$('.right>.success a:first').on('click', function () {
    localStorage.tp = '维修保养';
    var arr = [];
    $('.right').find('select').each(function () {
        if ($(this).val() != null && $(this).val() != '') {
            arr.push($(this).val());
        }
    });
    if (arr.length >= 4) {
        window.location.href = "用车养车-维护修养.html";
    } else {
        window.location.href = "用车养车-维护修养-选择车型.html";
    }
});
$('.right>.success a:eq(1)').on('click', function () {
    localStorage.tp = '钣喷做漆';
    var arr = [];
    $('.right').find('select').each(function () {
        if ($(this).val() != null && $(this).val() != '') {
            arr.push($(this).val());
        }
    });
    if (arr.length >= 4) {
        window.location.href = "用车养车-钣喷做漆.html";
    } else {
        window.location.href = "用车养车-维护修养-选择车型.html";
    }
});