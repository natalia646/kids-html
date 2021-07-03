const imagesCarouselHome = [
    'img/kiddie-parties.jpg',
    'img/holiday.jpg', 
];

let actualSlide = 0;

function showActualSlide() {
    const imgContainer = document.querySelector('.home-carousel .home-image');
    imgContainer.src = imagesCarouselHome[actualSlide];
}

function following(){
    actualSlide++;
    if (actualSlide > imagesCarouselHome.length - 1) actualSlide = 0;
    showActualSlide();
}
setInterval(following, 2000);

showActualSlide();