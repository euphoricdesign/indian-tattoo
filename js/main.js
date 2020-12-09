let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');


menuToggle.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuToggleIcon.setAttribute('class', 'fa fa-times');
    }else{
        menuToggleIcon.setAttribute('class', 'fa fa-bars');
    }

});

window.onscroll = function(){
    if(document.documentElement.scrollTop > 600){
        document.querySelector('.go-top-container')
        .classList.add('show2');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show2');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});