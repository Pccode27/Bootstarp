// Hero Carousel with Slide + Fade
const heroItems = document.querySelectorAll('.hero-item');
let currentIndex = 0;

function showHero(index){
  heroItems.forEach((item,i)=>{
    if(i === index){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % heroItems.length;
  showHero(currentIndex);
}, 4000);

// Scroll animations for slide-up elements
const slideElements = document.querySelectorAll('.slide-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.3});

slideElements.forEach(el => observer.observe(el));
