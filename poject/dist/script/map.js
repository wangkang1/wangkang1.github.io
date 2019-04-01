"use strict";

// 百度地图API功能
var map = new BMap.Map("map"); // 创建Map实例
map.centerAndZoom(new BMap.Point(118.8943, 31.9822), 14); // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.setCurrentCity("南京"); // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true); //

//定位
theLocation(map);

var mapType1 = new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] });
var mapType2 = new BMap.MapTypeControl({ anchor: BMAP_ANCHOR_TOP_LEFT });

var overView = new BMap.OverviewMapControl();
var overViewOpen = new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT });
add_control();

//添加地图类型和缩略图
function add_control() {
    map.addControl(mapType1); //2D图，卫星图
    map.addControl(mapType2);
    map.setCurrentCity("南京"); //由于有3D图，需要设置城市哦
    map.addControl(overView); //添加默认缩略地图控件
    map.addControl(overViewOpen); //右下角，打开
}

//信息框
var opts = {
    width: 250, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "信息窗口", // 信息窗口标题
    enableMessage: true //设置允许信息窗发送短息
};

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

//信息框dom
var node = "<ul style=\"margin:0;padding:0;font-size: 12px;height:24px;\">\n                <li style=\"list-style-type: none;display: inline-block\"> \u7535\u8BDD\uFF1A</li>\n                <li class=\"tel\" style=\"list-style-type: none;display: inline-block;color:red;\"> 400-817-9886</li>\n            </ul>\n            <ul style=\"margin:0;padding:0;font-size: 12px;height:24px;\">\n                <li style=\"list-style-type: none;display: inline-block\"> \u5730\u5740\uFF1A</li>\n                <li style=\"list-style-type: none;display: inline-block\"> \u5357\u4EAC\u5E02\u6C5F\u5B81\u533A\u4E1C\u5C71\u8857\u9053\u6DA6\u9E92\u8DEF8\u53F7</li>\n            </ul>\n            <a onclick=\"busLine()\" style=\"padding:0 10px;background-color: #2d8ce2;color:#fff;float:left;\">\u516C\u4EA4\u7EBF\u8DEF</a>\n            <a onclick=\"carLine()\" style=\"padding:0 10px;background-color: #2d8ce2;color:#fff;float:right;\">\u81EA\u9A7E\u67E5\u8BE2</a>\n        ";

function openInfo(e) {
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(node, opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //开启信息窗口
}

//公交线路
function busLine() {
    var start = "新城科技园";
    var end = "南京市江宁区东山街道润麒路8号";
    var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
    var transit = new BMap.TransitRoute(map, {
        renderOptions: { map: map },
        policy: 0
    });
    map.clearOverlays();
    var i = 0;
    search(start, end, routePolicy[i]);

    function search(start, end, route) {
        transit.setPolicy(route);
        transit.search(start, end);
    }
}

//自驾路线
function carLine() {
    var start = "新城科技园";
    var end = "南京市江宁区东山街道润麒路8号";
    var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME, BMAP_DRIVING_POLICY_LEAST_DISTANCE, BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
    map.clearOverlays();
    var i = 0;
    search(start, end, routePolicy[i]);

    function search(start, end, route) {
        var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true }, policy: route });
        driving.search(start, end);
    }
}