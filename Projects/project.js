// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});




// Smooth scroll for project card hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// // Smooth scroll to project sections when clicked
// document.querySelectorAll('.project-card').forEach(card => {
//     card.addEventListener('click', function () {
//         const projectTitle = this.querySelector('h3').textContent;
//         alert(`You clicked on the project: ${projectTitle}`);
//         // Optionally, scroll to another part of the page or show more info in a modal
//     });
// });
