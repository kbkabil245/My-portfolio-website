// ============================================================
// Mobile Sidebar Toggle
// ============================================================
function openSidebar() {
document.getElementById("mySidebarMenu").classList.add("active");
}

function closeSidebar() {
document.getElementById("mySidebarMenu").classList.remove("active");
}

// ============================================================
// Page Initialization (Sticky Header, Typing Effects, Scroll Reveal,
// Nav Scroll-Spy Underline, Scroll-to-Top)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
// Sticky Header Functionality
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
if (window.scrollY > 30) { header.classList.add("sticky"); }
else { header.classList.remove("sticky"); }
});

// Typing Text Effect Engine
const typingSpan = document.querySelector(".typing-text");
if (typingSpan) {
const roles = ["QA Automation Engineering.", "Manual Testing.", "Automation Testing (Selenium/Java)."];
let roleIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
let currentRole = roles[roleIndex];
if (isDeleting) {
typingSpan.innerHTML = `I am into <span style="color: #3b82f6; font-weight: bold; text-shadow: 0 0 10px rgba(59,130,246,0.2);">${currentRole.substring(0, charIndex - 1)}</span>`;
charIndex--;
} else {
typingSpan.innerHTML = `I am into <span style="color: #3b82f6; font-weight: bold; text-shadow: 0 0 10px rgba(59,130,246,0.2);">${currentRole.substring(0, charIndex + 1)}</span>`;
charIndex++;
}
let typeSpeed = isDeleting ? 40 : 80;
if (!isDeleting && charIndex === currentRole.length) { typeSpeed = 1500; isDeleting = true; }
else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500; }
setTimeout(typeEffect, typeSpeed);
}
setTimeout(typeEffect, 1000);
}

// Header logo typing effect
const headerLogo = document.querySelector(".logo");
if (headerLogo) {
const headerText = "Welcome To My Portfolio Website";
let logoCharIndex = 0;
function typeHeaderLogo() {
headerLogo.textContent = headerText.slice(0, logoCharIndex + 1);
logoCharIndex++;
if (logoCharIndex < headerText.length) {
setTimeout(typeHeaderLogo, 80);
}
}
setTimeout(typeHeaderLogo, 500);
}

// Dual-Direction Scroll Reveal Engine (Up & Down Animation)
function revealSections() {
const reveals = document.querySelectorAll(".reveal");
reveals.forEach(element => {
const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;
const elementBottom = element.getBoundingClientRect().bottom;

if (elementTop < windowHeight - 60 && elementBottom > 60) {
element.classList.add("active");
} else {
element.classList.remove("active");
}
});
}

window.addEventListener("scroll", revealSections);
revealSections(); // Initial Trigger

// ========================================================
// Nav Scroll-Spy Underline (highlights current section in the
// header nav and slides the glowing underline beneath it)
//
// IMPORTANT: this must live inside DOMContentLoaded. It used to
// sit in an inline <script> placed inside <header>, ABOVE the
// <section> elements in the page. Because that script ran the
// moment the parser reached it, document.querySelectorAll('section')
// returned an empty, static NodeList - the sections didn't exist
// in the DOM yet - so no section ever matched and the underline
// never appeared. Running it here, after the whole document has
// loaded, guarantees every section already exists when we query.
// ========================================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navIndicator = document.getElementById("navIndicator");

function moveNavIndicator(activeLink) {
if (!navIndicator || !activeLink) return;
navIndicator.style.left = activeLink.offsetLeft + "px";
navIndicator.style.width = activeLink.offsetWidth + "px";
navIndicator.classList.add("visible");
}

function runScrollSpy() {
// Default to the first section (Home) instead of an empty
// string - an empty string is a substring of every link's
// href, so it used to match ALL links and the indicator
// always ended up on the last one (Contact).
let current = sections.length ? sections[0].getAttribute("id") : "";
const scrollPosition = window.scrollY || window.pageYOffset;
const reachedBottom = (window.innerHeight + scrollPosition) >= (document.documentElement.scrollHeight - 4);

if (reachedBottom && sections.length) {
current = sections[sections.length - 1].getAttribute("id");
} else {
sections.forEach(section => {
const sectionTop = section.offsetTop;
if (scrollPosition >= sectionTop - 150) {
current = section.getAttribute("id");
}
});
}

let activeLink = null;
navLinks.forEach(link => {
link.classList.remove("active");
// Exact match instead of .includes() - substring matching
// was part of the same bug above.
if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
activeLink = link;
}
});

moveNavIndicator(activeLink);
}

window.addEventListener("scroll", runScrollSpy);
window.addEventListener("resize", () => {
moveNavIndicator(document.querySelector(".nav-link.active"));
});
runScrollSpy();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
function toggleScrollToTop() {
if (!scrollToTopBtn) return;
if (window.scrollY > 100) {
scrollToTopBtn.classList.add("show");
} else {
scrollToTopBtn.classList.remove("show");
}
}
window.addEventListener("scroll", toggleScrollToTop);
toggleScrollToTop();
if (scrollToTopBtn) {
scrollToTopBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
}
});
