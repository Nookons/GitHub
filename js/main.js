document.getElementById('modalNExt').addEventListener('click', skeepModal);

function myWork(e) {
    let modalMyWork = document.querySelector('.modalMyWork');

    if(modalMyWork.classList.contains('active')) {

        e.target.classList.add('hide');

        setTimeout(removeActive, 100);

        function removeActive() {
            modalMyWork.classList.remove('active');
            e.target.classList.remove('hide');
        }
    }
    else {
        modalMyWork.classList.add('active');
    }
}

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

