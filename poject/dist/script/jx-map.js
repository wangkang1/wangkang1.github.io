"use strict";

// 百度地图API功能
var map = new BMap.Map("map"); // 创建Map实例
map.centerAndZoom(new BMap.Point(118.8943, 31.9822), 14); // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.setCurrentCity("南京"); // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true); //

//定位
theLocation(map);

// 用经纬度设置地图中心点
function theLocation(map) {
  map.clearOverlays();
  var new_point = new BMap.Point(118.8843, 31.9822);
  var marker = new BMap.Marker(new_point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  map.panTo(new_point);
  marker.addEventListener("click", function (e) {
    openInfo(e);
  });
}

function openInfo(e) {
  var p = e.target;
  var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
  var infoWindow = new BMap.InfoWindow(node, opts); // 创建信息窗口对象
  map.openInfoWindow(infoWindow, point); //开启信息窗口
}