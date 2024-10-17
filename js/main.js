// Carousel Caption

$(document).ready(function () {
  // Get all carousel captions
  const captions = $(".carousel-caption");

  // Initially show the first caption
  captions.eq(0).addClass("show");

  // When the carousel slides change
  $("#carouselExampleFade").on("slide.bs.carousel", function () {
    // Hide all captions
    captions.removeClass("show");
  });

  $("#carouselExampleFade").on("slid.bs.carousel", function () {
    // After the slide transition, show the current caption
    const currentIndex = $(this).find(".active").index();
    captions.eq(currentIndex).addClass("show");
  });
});

// JavaScript to hide the navbar on scroll down and show it on scroll up

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // User is scrolling down
    navbar.classList.add("hidden");
  } else {
    // User is scrolling up
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Form Email Submission form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Create a FormData object to send the form data via AJAX
    const formData = new FormData(this);

    // Send the data to the PHP script
    fetch("sendEmail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "success") {
          // Show the confirmation message
          document.getElementById("confirmationMessage").style.display =
            "block";
          // Reset the form
          document.getElementById("contactForm").reset();
        } else {
          alert("There was an error sending the message. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  });

// Welcome Page Carousel

$(document).ready(function () {
  // Initialize the carousel with a fade effect
  $("#welcomeCarousel").carousel({
    interval: 5000, // Adjust the time for slide duration
    ride: "carousel",
    wrap: true,
  });
});

// This ensures that the carousel starts and uses Bootstrap's functionality
var myCarousel = document.querySelector("#carouselExample");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Set your interval here
  wrap: true, // Enable wrapping to the first slide
});

// Optional: To preload images if needed
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
images.forEach((src) => {
  const img = new Image();
  img.src = src;
});
