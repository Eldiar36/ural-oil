function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find(".link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');
$('.nav_menu  li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active');
});
$('.home-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.work-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive:[
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint:1024,
            settings: "unslick"
        }
        ]
});
$('.licenses-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 6,

    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 1.2,
                slidesToScroll: 1,

            }
        },
    ]
});
$('.catalog-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 767,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 550,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 1.5,
            }
        },
    ]
});
$('.catalog-slider-two').slick({
    infinite: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 767,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 550,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 2.5,
            }
        },
    ]
});
$('.catalog-slider-third').slick({
    infinite: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 767,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 550,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 1.7,
            }
        },
    ]
});
var element = document.getElementById('phone_mask');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}

var mask = new IMask(element, maskOptions);
