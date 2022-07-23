/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
    let header = $('.header'),
        btnMenu = $('.header__btnmenu'),
        screen = {
            mobile: 767,
            tablet: 991,
            desktop: 1199
        };

    // DETECT DEVICE
    function mobileDetect() {
        let md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile() != null || md.tablet() != null) {
            mobile = true
            tablet = true
        } else {
            mobile = false
            tablet = false
        }
    }
    mobileDetect();


    // WINDOW SCROLLING
    $(window).on('scroll', function () {

    })


    // INIT
    function init() {
        $('body').imagesLoaded()
            .progress({ background: true }, function (instance, image) { })
            .always(function (instance) {
                $('.loading').addClass('--hide')
            })
            .fail(function () {
                // console.log('all images loaded, at least one is broken');
            })
            .done(function (instance) {
                // console.log('all images successfully loaded');
            });
    }
    init();

})

let $carousel = $(".product__list");
$carousel.flickity({
	cellAlign: "left",
	contain: true,
	wrapAround: true,
	prevNextButtons: false,
	pageDots: false,
});
$(".product .product__control .product__control-btn.prev").on("click", function () {
	$carousel.flickity("previous");
});
$(".product .product__control .product__control-btn.next").on("click", function () {
	$carousel.flickity("next");
});

let $sliderDetailProduct = $(".productDetail .productDetail-content .slider");
$sliderDetailProduct.flickity({
	contain: true,
	prevNextButtons: false,
	pageDots: false,
	fullscreen: true,
});

let $thumbDetailProduct = $(".productDetail .productDetail-content .thumb .thumb__list");
let $thumbPrev = $(".productDetail .productDetail-content .thumb .thumb__control-btn.prev");
let $thumbNext = $(".productDetail .productDetail-content .thumb .thumb__control-btn.next");

asNavFor: $(".productDetail .productDetail-content .slider")[0];

$thumbDetailProduct.flickity({
    asNavFor: ".productDetail .productDetail-content .slider",
	cellAlign: "left",
	wrapAround: false,
	draggable: false,
	contain: true,
	prevNextButtons: false,
	pageDots: false,
	lazyLoad: 5,
});
$thumbPrev.on("click", function () {
    $sliderDetailProduct.flickity("previous");
	$thumbDetailProduct.flickity("previous");
});
$thumbNext.on("click", function () {
    $sliderDetailProduct.flickity("next");
	$thumbDetailProduct.flickity("next");
});