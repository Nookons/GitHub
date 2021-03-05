document.getElementById('modalNExt').addEventListener('click', skeepModal);

function skeepModal () {
    let modalProg = document.querySelector('.progress-bar-modal');
    let ModalCheck = document.getElementById('ModalCheck');


    if(ModalCheck.checked !== false) {

        modalProg.classList.add('active');

        setTimeout(hideModal, 3500);

        function hideModal() {
            let modal = document.getElementById('modal');
            modal.style.display = "none";
        }
    }
    else {
        return false;
    }
}
window.addEventListener('resize', function AutoSizeSlide() {
    let UserY = window.innerHeight;
    let Head  = document.getElementById('header');
    let Slide = document.querySelectorAll('.item')

    var MathSlideY = UserY - Head.offsetHeight;

    Slide.forEach(item => {
        item.style.height = UserY + 'px';
    })
})

function StartSizeSlide() {
    let UserY = window.innerHeight;
    let Head  = document.getElementById('header');
    let Slide = document.querySelectorAll('.item')

    var MathSlideY = UserY - Head.offsetHeight;

    Slide.forEach(item => {
        item.style.height = UserY + 'px';
    })
}

StartSizeSlide();

