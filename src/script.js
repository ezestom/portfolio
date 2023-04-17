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

// effect page's anchors  click
function agregarEfectoClic() {
	const links = document.querySelectorAll('a');
 
	for (let i = 0; i < links.length; i++) {
	  let timeoutID;
	  links[i].addEventListener('mousedown', function() {
		 clearTimeout(timeoutID);
		 this.style.filter = "drop-shadow(0 0 0.75em #4834d4)";
	  });
	  links[i].addEventListener('mouseup', function() {
		 this.style.filter = 'none';
	  });
	  links[i].addEventListener('mouseout', function() {
		 timeoutID = setTimeout(() => {
			this.style.filter = 'none';
		 }, 100);
	  });
	}
 } 
 agregarEfectoClic();
 
// send me a message

let botonEnviar = document.getElementById("send-button");
botonEnviar.addEventListener("click", function () {
	let mensaje = document.querySelector(".message-input").value;
	let correo =
		"mailto:ezequielstom@gmail.com?subject=Mensaje desde el chat&body=" +
		encodeURIComponent(mensaje);
	window.location.href = correo;
});

// primera posicion de cursor en textarea
const textarea = document.querySelector("textarea");
textarea.value = "";
textarea.selectionStart = 0; // Establecer la posición inicial
