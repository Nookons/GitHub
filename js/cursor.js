/*$("#testarea").mousemove(function(e) {
    $("#info").val($(e.target).attr("class"));
})*/

let xMinus = 25;
let YMinus = 25;

var flag = true;


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:0,
    smartSpeed: 1500,
    animateOut: 'animate__fadeOut',
    delay: 1500,
    animateIn: 'animate__jackInTheBox',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


function progress(e) {

    flag = false;

    console.log(flag);
    let cursorPointer   = document.getElementById('cursorPointer');

    X = event.pageX;
    Y = event.pageY;

    cursorPointer.classList.add('borderProgres');
    cursorPointer.style.borderRadius = '0';
    e.target.classList.add('borderProgres');


    setTimeout( test, 3000)
    setTimeout( ProgressDone, 3500);

    function test() {
        cursorPointer.classList.remove('slideA');
        cursorPointer.classList.remove('borderProgres')
        cursorPointer.style.display = 'none';
        e.target.style.display = "none"


        let xMinus = 25;
        let YMinus = 25;

        cursorPointer.style.left = X - xMinus + 'px';
        cursorPointer.style.top  = Y - YMinus + 'px';
        cursorPointer.style.width  = '50px';
        cursorPointer.style.height = '50px';
        cursorPointer.style.borderRadius  = '50%';
    }
}

function ProgressDone() {

    flag = true;

    owl = null;

    let owlDots = document.querySelector('.owl-dots');
    let about = document.getElementById('about');
    let header = document.querySelector('.header');
    let owlNav = document.querySelector('.owl-nav');
    let navigation = document.querySelector('.navigation');
    let hiden = document.querySelectorAll('.hiden');

    owlDots.style.display = 'none';
    about.style.display = 'block';
    header.classList.add('scroll');
    owlNav.style.display = 'block';
    navigation.style.display = 'block';

    hiden.forEach(item => {
        item.style.display = 'none';
    })


    about.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

document.addEventListener('mousemove', cursor);


function cursor(e) {

    if(flag !== false) {
        let cursorPointer   = document.getElementById('cursorPointer');
        let showClass   = document.getElementById('showClass');
        let GetClass   = event.target.className.toString();
        let GetType   = event.target.nodeName;
        let GetParents   = event.target;


        let link            = GetClass.indexOf('cursorA');
        let language        = GetClass.indexOf('language');
        let itemLan         = GetClass.indexOf('itemLan');
        let Logo            = GetClass.indexOf('logo');
        let slideA          = GetClass.indexOf('slide-a');


        X = event.pageX;
        Y = event.pageY;



        if(link !== -1) {

            let elem = event.target.getBoundingClientRect();

            cursorPointer.classList.add('language');

            let xMinus = 50;
            let YMinus = 50;

            cursorPointer.style.left = X - xMinus + 'px';
            cursorPointer.style.top  = Y - YMinus + 'px';
        }

        else if (GetType === 'SPAN' && GetClass !== 'logo') {
            let elem = event.target.getBoundingClientRect();

            cursorPointer.style.top = Math.trunc(elem.top) - 7.5 + 'px';
            cursorPointer.style.left = Math.trunc(elem.left) - 7.5 + 'px';
            cursorPointer.style.width = elem.width + 15 +'px';
            cursorPointer.style.height = elem.height + 15 + 'px';
            cursorPointer.style.border = '1px solid white';
            cursorPointer.style.borderRadius = '5px';
            cursorPointer.style.boxShadow = 'inset 0 0 15px rgba(265,265,265, 1)';

        }

        else if (language !== -1) {
            cursorPointer.classList.remove('link');
            cursorPointer.classList.remove('itemLan');
            cursorPointer.classList.add('language');

            let xMinus = 50;
            let YMinus = 50;

            cursorPointer.style.left = X - xMinus + 'px';
            cursorPointer.style.top  = Y - YMinus + 'px';
        }

        else if (itemLan !== -1) {
            cursorPointer.classList.add('itemLan');

            let xMinus = 12.5;
            let YMinus = 12.5;

            cursorPointer.style.left = X - xMinus + 'px';
            cursorPointer.style.top  = Y - YMinus + 'px';
        }

        else if (Logo !== -1 || GetType === "SVG") {
            cursorPointer.classList.add('logo');

            cursorPointer.style.left = '0';
            cursorPointer.style.top  = '0';
        }

        else if (slideA !== -1) {
            cursorPointer.classList.add('slideA');

            let elem = event.target.getBoundingClientRect();

            cursorPointer.style.top = Math.trunc(elem.top) + 'px';
            cursorPointer.style.left = Math.trunc(elem.left) + 'px';
            cursorPointer.style.width = elem.width + 'px';
            cursorPointer.style.height = elem.height + 'px';
            cursorPointer.style.borderRadius = '25px';

            console.log(elem);
        }

        else  {
            cursorPointer.style.left = X - xMinus + 'px';
            cursorPointer.style.top  = Y - YMinus + 'px';

            cursorPointer.classList.remove('link');
            cursorPointer.classList.remove('language');
            cursorPointer.classList.remove('itemLan');
            cursorPointer.classList.remove('logo');
            cursorPointer.classList.remove('slideA');
            cursorPointer.classList.remove('borderProgres');

            cursorPointer.style.width = '50px';
            cursorPointer.style.height = '50px';
            cursorPointer.style.backgroundColor = 'transparent';
            cursorPointer.style.borderRadius = '50%';
            cursorPointer.style.border = '3px solid rgba(265,265,265, 1)';
            cursorPointer.style.transform = 'scale(1)';
            cursorPointer.style.boxShadow = 'none';

        }
    }
    else {
        return false;
    }
}




