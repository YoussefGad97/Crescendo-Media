// // Simple scroll animation for fade-in effect
// window.addEventListener("scroll", function () {
//   const elements = document.querySelectorAll(".about-box, .team-section");
//   elements.forEach((element) => {
//     const position = element.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 1.3;

//     if (position < screenPosition) {
//       element.style.opacity = "1";
//       element.style.transform = "translateY(0)";
//     }
//   });
// });

// // Initial state for elements
// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".about-box, .team-section");
//   elements.forEach((element) => {
//     element.style.opacity = "0";
//     element.style.transform = "translateY(50px)";
//     element.style.transition = "all 0.6s ease-out";
//   });
// });
