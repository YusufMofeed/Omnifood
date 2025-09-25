// UPDATE YEAR
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();
// ____________________________________________________________________ \\

// REVEAL CONTENT
function CreateObserver(selector, revealClass, options = { thrshold: 0.1 }) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(revealClass);
      } else {
        entry.target.classList.remove(revealClass);
      }
    });
  }, options);
  elements.forEach((el) => observer.observe(el));
}

CreateObserver(".hidden", "reveal");
// ____________________________________________________________________ \\

// MOBILE MENU
const menu = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelectorAll(".main-nav-list a");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
  menuBtn.classList.toggle("active");

  // overlay.style.display = menu.classList.contains("nav-open")
  //   ? "block"
  //   : "none";
  overlay.classList.toggle("enable");

  if (menu.classList.contains("nav-open")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  menuLinks.forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("nav-open");
      overlay.classList.remove("enable");
      document.body.classList.remove("no-scroll");
      menuBtn.classList.remove("active");
    })
  );

  overlay.addEventListener("click", () => {
    menu.classList.remove("nav-open");
    overlay.classList.remove("enable");
    document.body.classList.remove("no-scroll");
    menuBtn.classList.remove("active");
  });
});
// ____________________________________________________________________ \\

// TOGGLE MODE
const modeBtn = document.querySelector(".mode-btn");

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
    updateButton();
  }

  modeBtn.addEventListener("click", () => {
    window.toggleMode = function () {
      document.documentElement.classList.toggle("dark-mode");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark-mode")
          ? "dark"
          : "light"
      );
    };
    window.toggleMode();

    updateButton();
  });
});
function updateButton() {
  const btnText = document.querySelector(".mode-btn-text");
  if (document.documentElement.classList.contains("dark-mode")) {
    btnText.textContent = "Light Mode";
  } else {
    btnText.textContent = "Dark Mode";
  }
  const modeBtnIcon = document.querySelectorAll(".mode-btn-icon");

  modeBtnIcon.forEach((icon) => {
    if (document.documentElement.classList.contains("dark-mode")) {
      icon.classList.add("dark");
    } else {
      icon.classList.remove("dark");
    }
  });
}
// ____________________________________________________________________ \\

// STICKY NAV BAR
const stickingPoint = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const point = entries[0];
    if (!point.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, thrshold: 0 }
);
observer.observe(stickingPoint);
