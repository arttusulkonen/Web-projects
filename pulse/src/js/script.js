$(document).ready(function(){    $('.carousel__inner').slick({        speed: 300,        // adaptiveHeight: true,        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="left"></button>',        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="right"></button>',        responsive: [            {                breakpoint: 992,                settings: {                    dots: true,                    arrows: false                }            },            {                breakpoint: 600,                settings: {                    slidesToShow: 2,                    slidesToScroll: 2                }            },            {                breakpoint: 480,                settings: {                    slidesToShow: 1,                    slidesToScroll: 1                }            }        ]    });});