let previousTitle = document.title;

// Change title when window is not focused

window.addEventListener("blur", () => {
	previousTitle = document.title;
	document.title = "Don't go away, come back!";
});
window.addEventListener("focus", () => {
	document.title = previousTitle;
});
// mobile navbar

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
				faq.style.filter = "none";
			});
		});
	}

	check.addEventListener("change", function () {
		if (check.checked) {
			navbar.style.top = "0";
			main.style.filter = " brightness(0.3) ";
			footer.style.filter = " brightness(0.3) ";
			faq.style.filter = " brightness(0.3) ";
			hideNavbar();
		} else if (!check.checked) {
			main.style.filter = "none";
			navbar.style.top = "-1000%";
			footer.style.filter = "none";
			faq.style.filter = "none";

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

// change color theme
// const navbarList = document.querySelector(".navbar-list");
// const themeBtn = document.querySelector(".theme-switch__checkbox");
// const hero = document.querySelector(".hero");

// const allCardTheme = document.querySelectorAll(".card");
// const allCardTheme2 = document.querySelectorAll(".swiper-slide");
// const youtubeSection = document.querySelector(".youtube-section");

// const messageForm = document.querySelector(".message-form");
// const nameInput = document.querySelector(".name-input");
// const emailInput = document.querySelector(".email-input");
// const messageInput = document.querySelector(".message-input");
// const sendButton = document.querySelector(".send-button");
// const legend = document.querySelector(".send-message-legend");
// const labels = document.querySelectorAll(".label");
// const aboutCards = document.querySelectorAll(".background");
// const aboutCards2 = document.querySelector(".me-description");
// const faq = document.querySelector(".faq");
// const allSummary = document.querySelectorAll("summary");

// themeBtn.addEventListener("click", function () {
// 	if (!this.checked) {
// 		sectionExplore.forEach((section) => {
// 			section.classList.toggle("light-theme");
// 			allCardTheme.forEach((card) => {
// 				card.classList.toggle("explore-card-theme");
// 			});
// 			allCardTheme2.forEach((card) => {
// 				card.classList.toggle("swiper-slide-theme");
// 			});
// 			messageForm.classList.toggle("message-form-theme");
// 			nameInput.classList.toggle("message-theme");
// 			emailInput.classList.toggle("message-theme");
// 			messageInput.classList.toggle("message-theme");
// 			legend.classList.add("message-theme");
// 			hero.classList.add("light-theme-header");
// 			labels.forEach((label) => {
// 				label.classList.add("message-theme");
// 			});
// 			youtubeSection.classList.toggle("youtube-section-light-theme");

// 			nameInput.classList.toggle("message-input-theme");
// 			emailInput.classList.toggle("name-input-theme");
// 			messageInput.classList.toggle("email-input-theme");
// 			sendButton.classList.toggle("send-button-theme");
// 			legend.classList.toggle("send-message-legend-theme");
// 			aboutCards2.classList.toggle("background-active");
// 			aboutCards.forEach((card) => {
// 				card.classList.toggle("background-active");
// 			});
// 			faq.classList.toggle("faq-theme");
// 		});
// 	} else {
// 		sectionExplore.forEach((section) => {
// 			section.classList.toggle("light-theme");
// 			allCardTheme.forEach((card) => {
// 				card.classList.toggle("explore-card-theme");
// 			});
// 			allCardTheme2.forEach((card) => {
// 				card.classList.toggle("swiper-slide-theme");
// 			});
// 			youtubeSection.classList.toggle("youtube-section-light-theme");
// 			messageForm.classList.toggle("message-form-theme");
// 			nameInput.classList.toggle("message-theme");
// 			emailInput.classList.toggle("message-theme");
// 			messageInput.classList.toggle("message-theme");
// 			legend.classList.remove("message-theme");
// 			hero.classList.toggle("light-theme-header");
// 			labels.forEach((label) => {
// 				label.classList.remove("message-theme");
// 			});
// 			nameInput.classList.toggle("message-input-theme");
// 			emailInput.classList.toggle("name-input-theme");
// 			messageInput.classList.toggle("email-input-theme");
// 			sendButton.classList.toggle("send-button-theme");
// 			legend.classList.toggle("send-message-legend-theme");
// 			aboutCards.forEach((card) => {
// 				card.classList.remove("background-active");
// 			});
// 			aboutCards2.classList.toggle("background-active");
// 			faq.classList.remove("faq-theme");
// 			allSummary.forEach((summary) => {
// 				summary.classList.remove("faq-light-theme");
// 			});
// 		});
// 	}
// });

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

// Agregar estilos a los elementos

cardExploreElements.forEach((cardExplore) => {
	cardExplore.addEventListener("click", function () {
		// Agregar estilos a los elementos
		cardExplore.classList.toggle("card-explore-active");
		cardExplore.classList.toggle("blur-in");

		// Obtener el índice de la carta clickeada
		const clickedCardIndex =
			Array.from(cardExploreElements).indexOf(cardExplore);

		// Agregar unicamente estilos del styleCardIterator a la car clickeada

		addBtn[clickedCardIndex].classList.toggle(stylesCardIterator.addBtn);
		cardBanner[clickedCardIndex].classList.toggle(
			stylesCardIterator.cardBanner
		);
		cardBannerImg[clickedCardIndex].classList.toggle(
			stylesCardIterator.cardBannerImg
		);
		cardTitle[clickedCardIndex].classList.toggle(
			stylesCardIterator.cardTitle
		);
		cardAuthor[clickedCardIndex].classList.toggle(
			stylesCardIterator.cardAuthor
		);
		cardWrapper[clickedCardIndex].classList.toggle(
			stylesCardIterator.cardWrapper
		);
		closeBtn[clickedCardIndex].classList.toggle(
			stylesCardIterator.closeBtn
		);
		plusBtn[clickedCardIndex].classList.toggle(stylesCardIterator.plusBtn);

		// Restablecer los estilos para las demás cartas
		for (let i = 0; i < cardExploreElements.length; i++) {
			if (i !== clickedCardIndex) {
				cardExploreElements[i].classList.toggle("blur-out");
				cardExploreElements[i].classList.remove("card-explore-active");
				addBtn[i].classList.remove(stylesCardIterator.addBtn);
				cardBanner[i].classList.remove(stylesCardIterator.cardBanner);
				cardBannerImg[i].classList.remove(
					stylesCardIterator.cardBannerImg
				);
				cardTitle[i].classList.remove(stylesCardIterator.cardTitle);
				cardAuthor[i].classList.remove(stylesCardIterator.cardAuthor);
				cardWrapper[i].classList.remove(stylesCardIterator.cardWrapper);
				closeBtn[i].classList.remove(stylesCardIterator.closeBtn);
				plusBtn[i].classList.remove(stylesCardIterator.plusBtn);
			}
		}
	});
});
