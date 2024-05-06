setTimeout(() => {
    $('.preloader').addClass('hidden');
}, 1000);
setTimeout(() => {
    $('.loader-image img').addClass('show');
}, 300);

$(document).on('click', '.mobile-toggle', function () {
    $('.nav-list').css('right', '0');
    $('.nav-list').addClass('show-menu');
});
$(document).on('click', '.side-overlay', function () {
    $('.nav-list').css('right', '-100%');
    setTimeout(() => {
        $('.nav-list').removeClass('show-menu');
    },1000);
});
$(document).on('click', '.close-menu', function () {
    $('.nav-list').css('right', '-100%');
    setTimeout(() => {
        $('.nav-list').removeClass('show-menu');
    },1000);
});
$('.getquote').click(function() {
    $('.quote_modal').addClass('show-modal');
});
$('.close-modal').click(function() {
    $('.quote_modal').removeClass('show-modal');
});
$(document).ready(function () {
    $(".js-msd").click(function () {
        // $('.js-msds').fadeOut();
        $(this).closest('div').find('.js-msds').slideToggle();
    });
    $(".js-msdCheck").change(function () {
        if ($(this).prop("checked") == true) {
            $(this).parent('label').addClass('msd_options_option-check');
        } else {
            $(this).parent('label').removeClass('msd_options_option-check');
        }
    });
    $('span.cls-me').click(function() {
        $(this).parent('.js-msds').fadeOut();
    });
});

// setTimeout(() => {
//     var calcMargin = $('.site-header').css('height');
//     $('.margin-top').css('margin-top', calcMargin);
//     $('.hero-section').css('margin-top', `-${calcMargin}`);
// }, 1000);

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

var swiper1 = new Swiper(".myHeroSlider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
         delay: 4000,
         disableOnInteraction: false,
    },
    speed: 2000
});

var swiper2 = new Swiper(".myHomeSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000
});

var swiper3 = new Swiper(".serviceContentSlider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1000
});

var swiper4 = new Swiper(".serviceBgSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1000
});

var swiper = new Swiper(".myThumbSlider", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
  var swiper5 = new Swiper(".myProductSlider", {
  speed: 1000,
    thumbs: {
      swiper: swiper,
    },
    effect: "fade",
});