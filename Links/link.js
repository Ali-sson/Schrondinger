




// This function toggles the display of additional text when the "Read more" link is clicked.
function toggleReadMore() {
  const content = document.getElementById("more-text");
  const link = document.getElementById("read-more-link");

  content.classList.toggle("show");

  if (content.classList.contains("show")) {
    link.textContent = "Read less";
  } else {
    link.textContent = "Read more";
  }
}


// Fade in elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

// Observe all elements with 'fade-in' class
document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));


  // Hide navbar on scroll down and show on scroll up
 
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
  
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      navbar.style.top = "0";
      navbar.style.opacity = "1";
    } else {
      // Scrolling down
      navbar.style.top = "-120px"; // adjust if your navbar height differs
      navbar.style.opacity = "0";
    }
  
    prevScrollPos = currentScrollPos;
  });
  



// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});