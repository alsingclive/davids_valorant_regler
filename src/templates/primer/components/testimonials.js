let hiddenTestimonialItem = document.querySelectorAll(".offset-testimonial-item");
let revealTestimonialBtn = document.getElementById("testimonials-reveal-button");

revealTestimonialBtn.addEventListener("click", revealListItems);

function revealListItems() {
    hiddenTestimonialItem.forEach(listItem => {
        
        listItem.classList.remove("hidden");
    })
    revealTestimonialBtn.classList.add("hidden");
}