const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Fullscreen Image
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";

    });

});

// Show Image
function showImage() {
    lightboxImage.src = galleryImages[currentIndex].src;
}

// Next
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage();

});

// Previous
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage();

});

// Close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "Escape"){
            closeBtn.click();
        }
    }

});
