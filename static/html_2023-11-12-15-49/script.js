
const testimonials = [
  {
    id: 1,
    title: "Testimonial 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Testimonial 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "Testimonial 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

let currentTestimonialIndex = 0;

const displayedTestimonial = document.querySelector(".displayed-testimonial");
const nextButton = document.querySelector(".next-testimonial");
const previousButton = document.querySelector(".previous-testimonial");
const dropdown = document.querySelector(".testimonial-dropdown");

function displayTestimonial(index) {
  const testimonial = testimonials[index];
  displayedTestimonial.innerHTML = `
    <h2>${testimonial.title}</h2>
    <p>${testimonial.content}</p>
  `;
}

function switchToNextTestimonial() {
  currentTestimonialIndex++;
  if (currentTestimonialIndex >= testimonials.length) {
    currentTestimonialIndex = 0;
  }
  displayTestimonial(currentTestimonialIndex);
}

function switchToPreviousTestimonial() {
  currentTestimonialIndex--;
  if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = testimonials.length - 1;
  }
  displayTestimonial(currentTestimonialIndex);
}

function switchToSelectedTestimonial() {
  const selectedTestimonialIndex = parseInt(dropdown.value) - 1;
  currentTestimonialIndex = selectedTestimonialIndex;
  displayTestimonial(currentTestimonialIndex);
}

nextButton.addEventListener("click", switchToNextTestimonial);
previousButton.addEventListener("click", switchToPreviousTestimonial);
dropdown.addEventListener("change", switchToSelectedTestimonial);

displayTestimonial(currentTestimonialIndex);
