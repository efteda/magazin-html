

// $(document).ready(function(){

// $('.slider-active').owlCarousel({
//     loop:true,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })



// })
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// $('.counter').counterUp()

$(document).ready(function(){

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

})























// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:2,
//             nav:true,
//             loop:true
//         }
//     }
// })