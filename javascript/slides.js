
//querySelectorAll selects all the slides
var slides = document.querySelectorAll('#slides .slide');
console.log(slides);
// currentSlide keeps track of the current slide
var currentSlide = 0;
// create interval to show
console.log(currentSlide);
var slideInterval = setInterval(slideNext,2000);

function slideNext() {
  slides[currentSlide].className = 'slide';
  currentSlide = [currentSlide + 1] % slides.length;
  slides[currentSlide].className = 'slide showing';
}
// First, we change the current slide’s class so it’s not showing. The CSS transition handles the fade out automatically.
// Then we add one to the current slide, but we use the % operator to cycle back to zero if we’ve reached the end of the slides. As a quick reminder, the % operator divides two numbers and spits out the remainder. This is great for cases where you have to do math with cycles like a clock or a calendar. In this case, we have 5 slides, so here’s what happens with each number: 1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0.
// Once we have the new slide’s number, we change that slide’s class so that the slide is showing. Once again, our CSS opacity transition handles the fade effect automatically.
