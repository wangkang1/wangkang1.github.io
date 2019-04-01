'use strict';

var $titles = $('.m-navbar>.item');

$titles.click(function () {
    var $el = $(this);
    if (!$el.hasClass('active')) {
        $titles.removeClass('active');
        $el.addClass('active');
    }
});

var $line = $('.line>.item');

$line.click(function () {
    var $el = $(this);
    if (!$el.hasClass('active')) {
        $line.removeClass('active');
        $el.addClass('active');
    }
});

var titles = $('.m-tab>.titles>.title');

titles.click(function () {
    $('.m-tab>.companyIntru,.m-tab>.contactUS,.m-tab>.saleAdviser').css('display', 'none');
    var $el = $(this);
    var $index = $(this).index();
    if ($index === 0) {
        $('.m-tab>.companyIntru').css('display', 'block');
    } else if ($index === 1) {
        $('.m-tab>.contactUS').css('display', 'block');
    } else {
        $('.m-tab>.saleAdviser').css('display', 'block');
    }
});

$('.dropdown').on('mousedown', '.list>.item', function (e) {
    var t = e.currentTarget.innerText;
    var p = $(e.delegateTarget);
    p.find('button>.text').text(t);
});
$('.dropdown.third').on('mousedown', '.list>.item', function (e) {
    var t = e.currentTarget.innerText;
    var p = $(e.delegateTarget);
    p.find('button>.text').text(t);
    $('.merchant-price-info>.item>.address').text(t);
});