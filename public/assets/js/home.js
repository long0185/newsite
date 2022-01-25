window.onload = function() {
	var zhee;
	var slide;
	var myVideo = document.getElementById("vi");
	var myVideo2 = document.getElementById("vi2");
	myVideo2.play();
	var myVideo3 = document.getElementById("vi3");
	var mySwiper = new Swiper('.swiper-containerb', {
		autoplay: true,
		speed: 600,
		effect: 'fade',
		observer: true,
		observeParents: true,
		pagination: '.swiper-paginationb',
		paginationClickable: true,
		paginationBulletRender: function (swiper, index, className) {
				return '<span class="' + className + '"><i></i></span>';
		},
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		autoplayDisableOnInteraction : false,
		paginationClickable: true,
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
			slide = $('.swiper-pagination-bullet').length;
			var aaa = swiper.activeIndex;
		},
		onSlideChangeStart: function(swiper) {
			swiperAnimate(swiper);
			slide = $('.swiper-pagination-bullet').length;
			var aaa = swiper.activeIndex;
			if(aaa == 0){
					myVideo2.play();
			}else{
					myVideo2.currentTime = 0;
				myVideo2.pause();
			}
		}
	})
};
var swiper = new Swiper('.swiper-containerp', {
	pagination: '.swiper-paginationp',
		autoplay: 3000,
		effect: 'fade',
	paginationClickable: true
});
$(".mtop").removeClass('black');
$(".video").hover(function() {
	$(this).find('video').trigger('play');
}, function() {
	$(this).find('video').trigger('pause');
});
$(".close").click(function() {
	$('.Xialad').fadeOut();
	$('.Zysj').removeClass('ZysjOn');
});
var off = 0;
$('.p_menu').click(function() {
	if(off == 0) {
		$('.H_menu').slideDown();
		$(this).addClass('p_menuOn');
		off = 1;
	} else {
		$('.H_menu').slideUp();
		$(this).removeClass('p_menuOn');
		off = 0;
	}
});
// banner尺寸自适应
!function(){
	var bannerImg = $('.banner img'),
		bannerVideo = $('.banner video'),
		imgSizeW = 1920,
		imgSizeH = 976;
	$(window).bind('resize',function(){
		siteImgSize()
	})
	function siteImgSize(){
		var windW = $(window).width(),
			windH = $(window).height(),
			ratioW = windW/imgSizeW,
			ratioH = windH/imgSizeH;
		if(ratioW>ratioH){
			bannerImg.addClass('w').removeClass('h')
			bannerVideo.addClass('w').removeClass('h')
		}else{
			bannerImg.addClass('h').removeClass('w')
			bannerVideo.addClass('h').removeClass('w')
		}
	}
	siteImgSize()
}();
// 在大屏电脑时 第二屏放大
!function(){
	var pageTwo = $('.pageTwo');
	pageTwoScale();
	$(window).bind('resize',function(){
		pageTwoScale();
	})
	function pageTwoScale(){
		var windW = $(window).width(),
			ratioW = windW/1880;
		if(ratioW>1){
			pageTwo.css({
				transform:'scale('+ratioW+')',
				'-webkit-transform':'scale('+ratioW+')',
				'-moz-transform':'scale('+ratioW+')',
				'-mz-transform':'scale('+ratioW+')'
			})
		}else if(windW<1400){
			pageTwo.css({
				transform:'scale(0.85)',
				'-webkit-transform':'scale(0.85)',
				'-moz-transform':'scale(0.85)',
				'-mz-transform':'scale(0.85)'
			})
		}else if(ratioW<=1){
			pageTwo.css({
				transform:'none',
				'-webkit-transform':'none',
				'-moz-transform':'none',
				'-mz-transform':'none'
			})	
		}
	}
}();
// 第三屏视频播放
!function(){
	var playBtn = $('.play-btn');
	playBtn.hover(function(){
		$(this).find('img').attr('src','https://www.rotai.com/templates/rotai/imagesa/p/play1.png')
	},function(){
		$(this).find('img').attr('src','https://www.rotai.com/templates/rotai/imagesa/p/play.png')
	})
}();