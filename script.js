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