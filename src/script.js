let previousTitle = document.title;

window.addEventListener("blur", () => {
	previousTitle = document.title;
	document.title = "Don't go away, come back!";
});
window.addEventListener("focus", () => {
	document.title = previousTitle;
});

window.addEventListener("load", function () {
	const header = document.querySelector(".header");
	const check = document.querySelector("#checkbox");
	const main = document.querySelector("main");
	const navbar = document.querySelector(".navbar");
	const navbarLinks = document.querySelectorAll(".navbar-link");
	const footer = document.querySelector(".footer");

	function hideNavbar() {
		navbarLinks.forEach((link) => {
			link.addEventListener("click", function () {
				main.style.filter = "none";
				footer.style.filter = "none";
				navbar.style.top = "-500%";
				check.checked = false;
			});
		});
	}

	check.addEventListener("change", function () {
		if (check.checked) {
			navbar.style.top = "0";
			main.style.filter = " brightness(0.3) ";
			footer.style.filter = " brightness(0.3) ";
			hideNavbar();
		} else if (!check.checked) {
			main.style.filter = "none";
			navbar.style.top = "-500%";
			footer.style.filter = "none";

			hideNavbar();
		}
	});
});

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

// card explore move
const gridList = document.querySelector(".grid-list");
const cardExplore = document.querySelector(".explore-card");
const addBtn = document.querySelector(".btn-box");
const sectionExplore = document.querySelectorAll("section");
const cardBanner = document.querySelector(".card-banner");
const cardBannerImg = document.querySelector(".img-cover");
const cardTitle = document.querySelector(".card-title");
const cardAuthor = document.querySelector(".card-author");
const cardWrapper = document.querySelector(".wrapper");
const closeBtn = document.querySelector(".ri-close-line");
const plusBtn = document.querySelector(".ri-add-line");

const shouldDisableScroll = () => {
	if (cardExplore.classList.contains("card-explore-active")) {
		return true;
	}
};

cardExplore.addEventListener("click", function () {
	cardExplore.classList.toggle("card-explore-active");
	gridList.classList.toggle("grid-list-active");
	addBtn.classList.toggle("btn-box-active");
	cardBannerImg.classList.toggle("img-cover-active");
	cardBanner.classList.toggle("card-banner-active");
	cardTitle.classList.toggle("card-title-active");
	cardAuthor.classList.toggle("card-author-active");
	cardWrapper.classList.toggle("wrapper-active");
	closeBtn.classList.toggle("ri-close-line-active");
	plusBtn.classList.toggle("ri-add-line-active");

	if (cardExplore.classList.contains("card-explore-active")) {
		// Desactivar el scroll solo si se cumple la regla
		if (shouldDisableScroll()) {
			const scrollBarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		}
	} else {
		// Reactivar el scroll y restablecer el padding-right
		document.body.style.overflow = "auto";
		document.body.style.paddingRight = "0";
	}
});

