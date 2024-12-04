'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Project variables
// Select modal elements
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalTriggers = document.querySelectorAll("[data-modal-trigger]"); // All items that trigger the modal

// Function to toggle modal visibility
const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event listener to modal triggers (portfolio items)
modalTriggers.forEach(item => {
  item.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page navigation on modal trigger

    const category = this.querySelector(".portfolio-category"); // Get the category element

    // Check if the category is "Graphic Design" or "Art"
    if (category) {
      const categoryText = category.textContent.trim().toLowerCase();
      if (categoryText === "graphic design" || categoryText === "art") {
        const imgSrc = this.querySelector("img").src;
        const imgAlt = this.querySelector("img").alt;
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        toggleModal();
      }
    }
  });
});

// Add click event to close button and overlay
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Navigation function to handle page display
function handleNavigation(targetPage) {
  const pages = document.querySelectorAll('[data-page]'); // Select all articles

  pages.forEach(page => {
    if (page.dataset.page === targetPage) {
      page.classList.add('active'); // Show the target page
      window.scrollTo(0, 0); // Scroll to the top of the page
    } else {
      page.classList.remove('active'); // Hide other pages
    }
  });

  // Optionally, update the active class on navigation links if needed
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  navigationLinks.forEach(link => {
    link.classList.toggle('active', link.innerText.toLowerCase() === targetPage);
  });
}

// Add event in all portfolio post items to open the modal without changing pages
document.querySelectorAll('.portfolio-post-item a').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent page navigation on modal trigger

    // Open the modal only if category is "Graphic Design" or "Art"
    const category = this.querySelector(".portfolio-category");

    if (category) {
      const categoryText = category.textContent.trim().toLowerCase();
      if (categoryText === "graphic design" || categoryText === "art") {
        const imgSrc = this.querySelector("img").src;
        const imgAlt = this.querySelector("img").alt;
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        toggleModal();
      }
    }
  });
});
