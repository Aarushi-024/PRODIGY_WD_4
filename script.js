// mobile menu toggle
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// close mobile menu when clicking outside
document.addEventListener("click", function(e) {
  var menu = document.getElementById("mobile-menu");
  var hamburger = document.getElementById("hamburger");
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("open");
  }
});

// navbar shadow on scroll
window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// animate skill bars when they come into view
function animateSkillBars() {
  var bars = document.querySelectorAll(".skill-fill");
  bars.forEach(function(bar) {
    var rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      bar.style.width = bar.style.width; // already set inline
    }
  });
}

// intersection observer for skill bars
var skillSection = document.getElementById("skills");
var skillsAnimated = false;

window.addEventListener("scroll", function() {
  if (skillsAnimated) return;
  if (!skillSection) return;

  var rect = skillSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillsAnimated = true;
    var fills = document.querySelectorAll(".skill-fill");
    fills.forEach(function(fill) {
      var targetWidth = fill.style.width;
      fill.style.width = "0";
      setTimeout(function() {
        fill.style.width = targetWidth;
      }, 100);
    });
  }
});

// smooth active link highlight on scroll
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
  var current = "";
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#1a1a1a";
    }
  });
});

// fade-in sections on scroll
var fadeElements = document.querySelectorAll(".section");

function checkFade() {
  fadeElements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// set initial state
fadeElements.forEach(function(el) {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);