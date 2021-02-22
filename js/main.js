var product = $('.product-slide');
product.owlCarousel({
    items:4,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


var inst = $('.inst-slide');
inst.owlCarousel({
    items:5,
    loop:true,
    margin: 1,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        400: {
            items: 2
        },
        700:{
            items: 3
        },
        1000:{
            items:4
        },
        1500:{
            items:5
        },
        2000:{
            items:7
        }
    }
});
