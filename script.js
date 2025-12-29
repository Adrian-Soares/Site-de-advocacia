const header = document.getElementById("header");
const menu = document.getElementById("menu");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

window.addEventListener("load", () => {
  const heroContent = document.querySelector(".animate-hero");
  heroContent.classList.add("show");
});

const title = document.getElementById("heroTitle");
const text = title.innerText.trim();
title.innerHTML = "";

text.split(" ").forEach((word, wordIndex) => {
  const wordSpan = document.createElement("span");
  wordSpan.style.display = "inline-block";
  wordSpan.style.whiteSpace = "nowrap";

  [...word].forEach((letter, index) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerText = letter;
    letterSpan.style.animationDelay = `${(wordIndex * 6 + index) * 0.04}s`;
    wordSpan.appendChild(letterSpan);
  });

  title.appendChild(wordSpan);
  title.appendChild(document.createTextNode(" "));
});

const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

scrollElements.forEach(el => observer.observe(el));

lucide.createIcons();

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  // lógica do contato
});
