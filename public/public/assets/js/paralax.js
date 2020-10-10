



window.addEventListener('scroll', function(event){
    let scrolled = window.pageYOffset;
    let rate = scrolled * -0.2;
    const one = document.querySelector('.one');
    one.style.transform = 'translate3d(0px ,'+rate+'px, 0px)';
});

