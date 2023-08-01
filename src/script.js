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
const sectionExplore = document.querySelectorAll("section");
const cardExploreElements = document.querySelectorAll(".explore-card");
const gridList = document.querySelectorAll(".grid-list");
const addBtn = document.querySelectorAll(".btn-box");
const cardBanner = document.querySelectorAll(".card-banner");
const cardBannerImg = document.querySelectorAll(".img-cover");
const cardTitle = document.querySelectorAll(".card-title");
const cardAuthor = document.querySelectorAll(".card-author");
const cardWrapper = document.querySelectorAll(".wrapper");
const closeBtn = document.querySelectorAll(".ri-close-line");
const plusBtn = document.querySelectorAll(".ri-add-line");

const shouldDisableScroll = () => {
	return Array.from(cardExploreElements).some((cardExplore) =>
		cardExplore.classList.contains("card-explore-active")
	);
};
const stylesCardIterator = {
	gridList: "grid-list-active",
	addBtn: "btn-box-active",
	cardBannerImg: "img-cover-active",
	cardBanner: "card-banner-active",
	cardTitle: "card-title-active",
	cardAuthor: "card-author-active",
	cardWrapper: "wrapper-active",
	closeBtn: "ri-close-line-active",
	plusBtn: "ri-add-line-active",
};

function stylesCardIteratorFn() {
	// Agregar estilos a los elementos
	gridList.forEach((grid) => {
		grid.classList.toggle(stylesCardIterator.gridList);
	});
	addBtn.forEach((btn) => {
		btn.classList.toggle(stylesCardIterator.addBtn);
	});
	cardBannerImg.forEach((img) => {
		img.classList.toggle(stylesCardIterator.cardBannerImg);
	});
	cardBanner.forEach((banner) => {
		banner.classList.toggle(stylesCardIterator.cardBanner);
	});
	cardTitle.forEach((title) => {
		title.classList.toggle(stylesCardIterator.cardTitle);
	});
	cardAuthor.forEach((author) => {
		author.classList.toggle(stylesCardIterator.cardAuthor);
	});
	cardWrapper.forEach((wrapper) => {
		wrapper.classList.toggle(stylesCardIterator.cardWrapper);
	});
	closeBtn.forEach((close) => {
		close.classList.toggle(stylesCardIterator.closeBtn);
	});
	plusBtn.forEach((plus) => {
		plus.classList.toggle(stylesCardIterator.plusBtn);
	});
}

// Agregar estilos a los elementos

cardExploreElements.forEach((cardExplore) => {
	cardExplore.addEventListener("click", function () {
		cardExplore.classList.toggle("card-explore-active");

		// Agregar estilos a los elementos

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
});
