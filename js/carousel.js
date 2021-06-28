const image = [
    "img/bubbles.jpg", 
    "img/pie.jpg", 
    "img/girl.jpg", 
    "img/bear.jpg", 
    "img/candles.jpg", 
    "img/hearts.jpg" 
]

let currentSlide = 0;

function showCurrentSlide() {
    const imageContainer = document.querySelector('galleru-carousel .galleru-image');
    imageContainer.src = image[currentSlide];
}

function next(){
    currentSlide++;
    if (currentSlide > imagec.length - 1) currentSlide = 0;
    showCurrentSlide();
}
setInterval(next, 2000);

showCurrentSlide();