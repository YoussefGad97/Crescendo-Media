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

// back to the top button

// Get the button
let backToTopButton = document.getElementById("backToTop");

// Show the button when scrolled down 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
});

// Counter

// Counter animation
const counters = document.querySelectorAll(".counter");
let counterSection = document.querySelector("#counter-section");
let started = false;

window.addEventListener("scroll", function () {
  const sectionPos = counterSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.5;

  if (!started && sectionPos < screenPos) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    started = true;
  }
});

// Home Caption Animation

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleFade");
  const captions = document.querySelectorAll(".typed-text");

  // Function to start typing animation
  function typeEffect(element, text) {
    let index = 0;
    const interval = 80; // typing speed in ms
    let html = "";

    function type() {
      if (index < text.length) {
        if (text[index] === " ") {
          html += `<span class="space">&nbsp;</span>`; // Treat space as &nbsp;
        } else {
          html += `<span class="active">${text[index]}</span>`;
        }

        element.innerHTML = html;

        const spans = element.querySelectorAll("span");
        if (spans.length > 1 && text[index] !== " ") {
          spans[spans.length - 2].classList.remove("active");
          spans[spans.length - 2].style.color = "#C1E8FF"; // Change color of previous letter
        }

        index++;
        setTimeout(type, interval);
      } else {
        // Once the full text is typed, ensure all spans are colored
        const allSpans = element.querySelectorAll("span");
        allSpans.forEach((span) => (span.style.color = "white"));
      }
    }

    type();
  }

  // Start the typing effect on the active caption when the page loads
  captions.forEach((caption) => {
    const text = caption.getAttribute("data-text");
    if (caption.closest(".carousel-item").classList.contains("active")) {
      typeEffect(caption, text);
    }
  });

  // Listen for slide change events
  carousel.addEventListener("slid.bs.carousel", function () {
    captions.forEach((caption) => {
      const text = caption.getAttribute("data-text");
      if (caption.closest(".carousel-item").classList.contains("active")) {
        typeEffect(caption, text); // Trigger typing animation on active slide
      }
    });
  });
});

// Pro Display Section

document.addEventListener("DOMContentLoaded", function () {
  const professionalismSection = document.getElementById(
    "professionalism-section"
  );

  function fadeInSection() {
    const sectionPos = professionalismSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      professionalismSection.classList.add("fade-in");
    }
  }

  window.addEventListener("scroll", fadeInSection);
});

// Projects sliders

document.addEventListener("DOMContentLoaded", function () {
  const projectBlocks = document.querySelectorAll(".project-block");
  let lastScrollTop = window.pageYOffset;

  function handleScroll() {
    let scrollTop = window.pageYOffset;
    let scrollDown = scrollTop > lastScrollTop;

    projectBlocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Apply the "visible" class only when scrolling down and in the viewport
      if (scrollDown && rect.top < windowHeight && rect.bottom >= 0) {
        block.classList.add("visible");
      }
    });

    lastScrollTop = scrollTop;
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial call to handle elements in the viewport on load
});

// Services Cards
$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Optional: shows navigation arrows
    dots: true, // Optional: shows dots for navigation
    autoplay: true, // Optional: enables autoplay
    autoplaySpeed: 2000, // Optional: controls autoplay speed
  });
});

$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

AOS.init({
  duration: 1200, // Duration of the animation
});
