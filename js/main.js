// Chabad Student Association at YU — shared site behavior
// Static site: no logins, no data storage between visits. Everything here
// runs client-side only and forgets itself on refresh.

document.addEventListener("DOMContentLoaded", function () {
  highlightActiveNavLink();
  setupMobileNav();
  setupEventFilters();
});

// Give the current page's nav link an "active" style.
function highlightActiveNavLink() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-links a");
  links.forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// Toggle the mobile nav menu open/closed.
function setupMobileNav() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Filter event cards on events.html by category.
function setupEventFilters() {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".event-card");
  var emptyState = document.querySelector(".empty-state");
  if (!buttons.length || !cards.length) return;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");

      var category = button.getAttribute("data-filter");
      var visibleCount = 0;

      cards.forEach(function (card) {
        var matches = category === "all" || card.getAttribute("data-category") === category;
        card.hidden = !matches;
        if (matches) visibleCount++;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
}
