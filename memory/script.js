// Initialize slide index
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Loop to the first slide

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000); // 5 seconds for each slide
}
