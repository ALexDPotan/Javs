// Add hover effect to flip between panels (assuming multi-panel images)
document.querySelectorAll('.preview-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('img');
        // Swap to second panel (you’d need to prep images with two states)
        img.src = img.src.replace('page-1', 'page-2');
    });
    item.addEventListener('mouseout', () => {
        const img = item.querySelector('img');
        img.src = img.src.replace('page-2', 'page-1');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");
  
    // Option 1: Fixed delay (e.g., 2 seconds)
    setTimeout(() => {
      splash.classList.add("hidden");
      mainContent.classList.add("loaded");
      // Optionally remove splash from DOM after transition
      setTimeout(() => splash.remove(), 500);
    }, 2000);
  
    // Option 2: Wait for full page load (uncomment to use)
    /*
    window.addEventListener("load", () => {
      splash.classList.add("hidden");
      mainContent.classList.add("loaded");
      setTimeout(() => splash.remove(), 500);
    });
    */
  });

const hero = document.querySelector('.hero');
let isMouseOnHero = false;


const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Disable the CSS animation (we’ll control it manually)
slider.style.animation = 'none';


function updateSlide() {
    const slideWidth = slides[0].offsetWidth; // Get width of first slide
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    
    currentSlide = (currentSlide+1) % (slides.length);
    
    if(isMouseOnHero){
        console.log("mouse enterd hero");
    }
    else{
        console.log("mouse left hero");
        updateSlide();
    }
   
}, 1000); 

// Track mouse presence
hero.addEventListener('mouseenter', () => {
    isMouseOnHero = true;
    // console.log("endterd")
   
});

hero.addEventListener('mouseleave', () => {
    isMouseOnHero = false;
   
});

updateSlide();

