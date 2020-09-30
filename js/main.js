let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
console.log(burger);
burger.addEventListener('click', function() {
    this.classList.toggle('burger--active');
    menu.classList.toggle('header__menu--active');
});

let slides = document.querySelectorAll('.testimonials__slide');
let pagination = document.querySelector('.testimonials__pagination');
let i = 0;
while(i < slides.length) {
    let paginationItem = document.createElement('span');
    paginationItem.classList.add('testimonials__pagination-item');
    pagination.appendChild(paginationItem);
    i++;
}

let paginationItems  = document.querySelectorAll('.testimonials__pagination-item');
paginationItems[0].classList.add('testimonials__pagination-item--active');
for(let i = 0; i < slides.length; i++){
    paginationItems[i].addEventListener('click', function(){
        let active = document.querySelector('.testimonials__pagination-item--active');
        let activeSlide = document.querySelector('.testimonials__slide--active');
        console.log(active + ':' + activeSlide);
        slides[i].classList.add('testimonials__slide--active');
        paginationItems[i].classList.add('testimonials__pagination-item--active');
        active.classList.remove('testimonials__pagination-item--active');
        activeSlide.classList.remove('testimonials__slide--active');
    });    
}
