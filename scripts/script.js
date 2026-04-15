// Mobile Menu Toggle
const toggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Contact Form Validation
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, select, textarea");
    let valid = true;

    fields.forEach((field) => {
      if (!field.value.trim()) valid = false;
    });

    if (!valid) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Your request has been submitted!");
    form.reset();
    console.log("Mechanic site form submitted.");
  });
}

// Footer Year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Scroll Fade‑In Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Body load fade
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  console.log("Mechanic site loaded successfully.");
});
