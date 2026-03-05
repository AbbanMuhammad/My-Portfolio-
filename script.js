const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("is-open");

  // Accessibility — update aria attributes
  const isOpen = navMenu.classList.contains("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a link is clicked
navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navMenu.classList.remove("is-open");
    navToggle.textContent = "☰";
    navToggle.setAttribute("aria-expanded", false);
  }
});

const darkToggle = document.querySelector(".dark-mode-toggle");

// Remember preference across visits
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
darkToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

darkToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  darkToggle.textContent = next === "dark" ? "☀️" : "🌙";
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const highlightNav = () => {
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
};

window.addEventListener("scroll", highlightNav);