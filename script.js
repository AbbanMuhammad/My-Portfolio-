// ======================================
// NAVIGATION / HAMBURGER MENU
// ======================================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Guard clause to prevent crashes
if (navToggle && navMenu) {

  navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("is-open");

    const isOpen = navMenu.classList.contains("is-open");

    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.textContent = isOpen ? "✕" : "☰";

  });

  // Close menu when clicking a link
  navMenu.addEventListener("click", (event) => {

    if (event.target.tagName === "A") {

      navMenu.classList.remove("is-open");

      navToggle.textContent = "☰";
      navToggle.setAttribute("aria-expanded", false);

    }

  });

}


// ======================================
// DARK MODE TOGGLE
// ======================================

const darkToggle = document.querySelector(".dark-mode-toggle");

if (darkToggle) {

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);

  darkToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  darkToggle.addEventListener("click", () => {

    const currentTheme = document.documentElement.getAttribute("data-theme");

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);

    localStorage.setItem("theme", nextTheme);

    darkToggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";

  });

}


// ======================================
// SCROLL FEATURES
// - Active navigation
// - Header shrink
// ======================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

function handleScroll() {

  // -------------------
  // Active Nav Highlight
  // -------------------

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }

  });


  // -------------------
  // Header shrink
  // -------------------

  if (header) {

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

}


// ======================================
// OPTIMIZED SCROLL LISTENER
// ======================================

let ticking = false;

window.addEventListener("scroll", () => {

  if (!ticking) {

    requestAnimationFrame(() => {

      handleScroll();

      ticking = false;

    });

    ticking = true;

  }

});