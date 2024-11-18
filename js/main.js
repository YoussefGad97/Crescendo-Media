// Document Ready Function
$(document).ready(function () {
  // Carousel Caption
  const captions = $(".carousel-caption");
  captions.eq(0).addClass("show");

  $("#carouselExampleFade").on("slide.bs.carousel", function () {
    captions.removeClass("show");
  });

  $("#carouselExampleFade").on("slid.bs.carousel", function () {
    const currentIndex = $(this).find(".active").index();
    captions.eq(currentIndex).addClass("show");
  });

  // Welcome Page Carousel
  $("#welcomeCarousel").carousel({
    interval: 5000,
    ride: "carousel",
    wrap: true,
  });

  // Slick Carousel (Services Section)
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
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

// Navbar Hide/Show on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  navbar.classList.toggle("hidden", scrollTop > lastScrollTop);
  lastScrollTop = scrollTop;
});

// Back-to-Top Button
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  backToTopButton.style.display =
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ? "block"
      : "none";
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Email Submission
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch("sendEmail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "success") {
          document.getElementById("confirmationMessage").style.display =
            "block";
          this.reset();
        } else {
          alert("There was an error sending the message. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  });

// Counter Animation
const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector("#counter-section");
let counterStarted = false;

window.addEventListener("scroll", function () {
  const sectionPos = counterSection?.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.5;

  if (!counterStarted && sectionPos < screenPos) {
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
    counterStarted = true;
  }
});

// Home Caption Animation
document.addEventListener("DOMContentLoaded", function () {
  const captions = document.querySelectorAll(".carousel-caption p");

  captions.forEach((caption) => {
    const text = caption.innerText;
    const words = text.split(" ");
    caption.innerHTML = "";

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.innerText = word;
      span.style.setProperty("--delay", `${index * 0.1}s`);
      caption.appendChild(span);
      caption.appendChild(document.createTextNode(" "));
    });
  });
});

// Professionalism Section Fade-In
const professionalismSection = document.getElementById(
  "professionalism-section"
);

window.addEventListener("scroll", function () {
  const sectionPos = professionalismSection?.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    professionalismSection.classList.add("fade-in");
  }
});

// Projects Slider Animation
const projectBlocks = document.querySelectorAll(".project-block");
let lastScrollPosition = window.pageYOffset;

function handleScroll() {
  const scrollTop = window.pageYOffset;
  const isScrollingDown = scrollTop > lastScrollPosition;

  projectBlocks.forEach((block) => {
    const rect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (isScrollingDown && rect.top < windowHeight && rect.bottom >= 0) {
      block.classList.add("visible");
    }
  });

  lastScrollPosition = scrollTop;
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Trigger on page load to check initial visibility

// AOS Animation Initialization
AOS.init({ duration: 1200 });

// ScrollReveal Initialization
ScrollReveal().reveal(".section", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
});
