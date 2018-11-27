//クロスへフェード部分
$(function(){
	var $setElm = $('#header'),
	fadeSpeed = 3000,
	switchDelay = 5000;

	$setElm.each(function(){
		var targetObj = $(this);
		var findUl = targetObj.find('ul');
		var findLi = targetObj.find('li');
		var findLiFirst = targetObj.find('li:first');

		findLi.css({display:'block',opacity:'0',zIndex:'99'});
		findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

		setInterval(function(){
			findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
		},switchDelay);
	});
});
//---------------------------

//ハンバーガーメニュー
$(function(){
	var setImg = '#header_visual';
	var fadeSpeed = 1500;
	var switchDelay = 4000;

	$(setImg).children('.header_img').css({opacity:'0'});
	$(setImg + ' .header_img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('.header_img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
	
		var $header = $('#nav');
		var changeHeight = $('#main').offset().top;
		changeHeight = changeHeight-50;
//		console.log(changeHeight);
;
	// Nav Fixed
	$(window).scroll(function() {
			if ($(window).scrollTop() > changeHeight) {
					$header.addClass('fixed');
			} else {
					$header.removeClass('fixed');
			}
	});
	// Nav Toggle Button
	$('#nav-toggle').click(function(){
			$header.toggleClass('open');
	});

});
//---------------------------

//google Map部分

function initialize() {
  var latlng = new google.maps.LatLng(35.663142, 139.710294);/*表示したい場所の経度、緯度*/
  var myOptions = {
    zoom: 16, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
		scrollwheel: false,
    mapTypeControlOptions: { mapTypeIds: ['noText', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_custmomize'), myOptions);/*マップのID取得*/
 
   /*取得スタイルの貼り付け*/
  var styleOptions = [
  {
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];
 
 var styledMapOptions = { name: 'ブレンズコーヒー' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
 
/*アイコンの取得*/
var icon = new google.maps.MarkerImage('common/images/icon/icon_map.png',/*アイコンの場所*/
  new google.maps.Size(53,64),/*アイコンのサイズ*/
  new google.maps.Point(0,0)/*アイコンの位置*/
);
 
/*マーカーの設置*/
var markerOptions = {
  position: latlng,/*表示場所と同じ位置に設置*/
  map: map,
  icon: icon,
  title: 'ブレンズコーヒー'/*マーカーのtitle*/
};
var marker = new google.maps.Marker(markerOptions); 
}
//---------------------------

//スムーススクロール部分
$(function () {
	var headerHight = 0; //ヘッダの高さ
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
		$("html, body").animate({scrollTop:position}, 1000, "swing");
			return false;
	 });
});
//---------------------------

//中央寄せ両サイド表示（レスポンシブ）
$(function() {
	$('.center-item').slick({
		infinite: true,
		dots:true,
		slidesToShow: 1,
		centerMode: true, //要素を中央寄せ
		centerPadding:'100px', //両サイドの見えている部分のサイズ
		autoplay:true, //自動再生
		responsive: [{
			breakpoint: 768,
				settings: {
					centerMode: false,
			}
		}]
	});
});

