// Show the button when the user scrolls down
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Scroll to top when clicked
backToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.onclick = function () {
  document.body.classList.toggle("dark-mode");
};
// Typewriter Effect
const text = ["Hello, I'm Panashe Nkume.", "Web Developer.", "Creative Coder.", "Problem Solver."];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const speed = 100;

function type() {
  const element = document.querySelector(".typewriter-text");

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
      element.textContent = currentText;
    }

    if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
      element.textContent = currentText;
    }

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, speed);
}

type();
// Contact Form Validation
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  // Simulate successful submission
  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  form.reset();
});
// Shrink Header on Scroll
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
// Scroll Reveal Animations
ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '50px',
  duration: 800,
  delay: 100,
  reset: false, // change to true if you want them to animate every time
});
