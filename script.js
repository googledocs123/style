// Scroll background image effect
let scrollPosition = 0;

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;

    // Change background image as you scroll
    if (scrollPosition < 500) {
        document.getElementById("background-image").style.backgroundImage = "url('https://via.placeholder.com/1500x1000?text=Image+1')";
    } else if (scrollPosition < 1000) {
        document.getElementById("background-image").style.backgroundImage = "url('https://via.placeholder.com/1500x1000?text=Image+2')";
    } else if (scrollPosition < 1500) {
        document.getElementById("background-image").style.backgroundImage = "url('https://via.placeholder.com/1500x1000?text=Image+3')";
    } else {
        document.getElementById("background-image").style.backgroundImage = "url('https://via.placeholder.com/1500x1000?text=Image+4')";
    }
});

// Carousel functionality
let currentIndex = 0;
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];
const totalImages = images.length;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 3000); // Auto-change every 3 seconds
