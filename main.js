let nav = document.getElementById("navigation-mobile");

function hiddenNav() {
  let button = document.getElementById("open").addEventListener("click", () => {
    if (nav) {
      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    }
  });
  return button;
}


document.addEventListener('DOMContentLoaded', function() {
    const sectionItems = document.querySelectorAll('.section-item');
  

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );
  
    // Observe each section-item
    sectionItems.forEach((item) => observer.observe(item));
    
    // Debugging log
    console.log('Intersection Observer initialized and observing:', sectionItems);
  });
  
