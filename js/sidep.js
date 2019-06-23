 $("#01").mouseover(function() {
     $("#m01").show();
     $("#m02").hide();
     $("#m03").hide();
     $("#m04").hide();
     $("#m05").hide();
     $("#m06").hide();
 });
 $("#02").mouseover(function() {
     $("#m01").hide();
     $("#m02").show();
     $("#m03").hide();
     $("#m04").hide();
     $("#m05").hide();
     $("#m06").hide();
 });
 $("#03").mouseover(function() {
     $("#m01").hide();
     $("#m02").hide();
     $("#m03").show();
     $("#m04").hide();
     $("#m05").hide();
     $("#m06").hide();
 });
 $("#04").mouseover(function() {
    $("#m01").hide();
    $("#m02").hide();
    $("#m03").hide();
    $("#m04").show();
    $("#m05").hide();
    $("#m06").hide();
});
 $("#05").mouseover(function() {
    $("#m01").hide();
    $("#m02").hide();
    $("#m03").hide();
    $("#m04").hide();
    $("#m05").show();
    $("#m06").hide();
});
 $("#06").mouseover(function() {
    $("#m01").hide();
    $("#m02").hide();
    $("#m03").hide();
    $("#m04").hide();
    $("#m05").hide();
    $("#m06").show();
});
//
  $("#m01").mouseleave(function() {
     $("#m01").hide();
 });
  $("#m02").mouseleave(function() {
     $("#m02").hide();
 });
  $("#m03").mouseleave(function() {
     $("#m03").hide();
 });
  $("#m04").mouseleave(function() {
     $("#m04").hide();
 });
  $("#m05").mouseleave(function() {
     $("#m05").hide();
 });
  $("#m06").mouseleave(function() {
     $("#m06").hide();
 });
// 
$("#t1").mouseover(function() {
     $("#img1").show();
     $("#img2").hide();
     $("#img3").hide();
 });
 $("#t2").mouseover(function() {
     $("#img1").hide();
     $("#img2").show();
     $("#img3").hide();
 });
 $("#t3").mouseover(function() {
     $("#img1").hide();
     $("#img2").hide();
     $("#img3").show();
 });
//商品圖
 $("#gp1s").mouseover(function() {
     $("#gp1").show();
     $("#gp2").hide();
     $("#gp3").hide();
 });
 $("#gp2s").mouseover(function() {
     $("#gp1").hide();
     $("#gp2").show();
     $("#gp3").hide();
 });
 $("#gp3s").mouseover(function() {
     $("#gp1").hide();
     $("#gp2").hide();
     $("#gp3").show();
 });
//商品TAG
 $("#tag1").mouseover(function() {
     $("#tm1").show();
     $("#tm2").hide();
     $("#tm3").hide();
 });
 $("#tag2").mouseover(function() {
     $("#tm1").hide();
     $("#tm2").show();
     $("#tm3").hide();
 });
  $("#tag3").mouseover(function() {
     $("#tm1").hide();
     $("#tm2").hide();
     $("#tm3").show();
 });
//手機版TOPMENU
$(document).ready(function() {
    $(".justify").click(function() {
        $(".menu").slideToggle("slow");
    });
});
//通知
function b3a() {
  alert("已加入追蹤");
};
function b2a() {
  alert("感謝您，已加入購物車");
};
