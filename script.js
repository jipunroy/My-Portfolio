// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Menu open and close
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Click on menu link = close menu
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Automatic current year
document.getElementById("year").textContent = new Date().getFullYear();
