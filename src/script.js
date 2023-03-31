
let previousTitle = document.title;

window.addEventListener("blur", () => {
	previousTitle = document.title;
	document.title = "Don't go away, come back!";
});
window.addEventListener("focus", () => {
	document.title = previousTitle;
});

// 

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
	elemArr[i].addEventListener("click", function () {
		navbar.classList.toggle("active");
		overlay.classList.toggle("active");
	});
}

/**
 * toggle navbar when any navbar link will be clicked
 */

const navbarLinks = document.querySelectorAll("[data-navlink]");

for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener("click", function () {
		navbar.classList.toggle("active");
		overlay.classList.toggle("active");
	});
}

const backBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
	backBtn.style.display = "fixed";
});





