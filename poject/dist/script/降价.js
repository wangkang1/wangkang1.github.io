'use strict';

$('.x-header').on('click', '.x-tab', function () {
    $(this).addClass('active').siblings().removeClass('active');
});