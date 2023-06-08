let previousTitle = document.title;

window.addEventListener("blur", () => {
	previousTitle = document.title;
	document.title = "Don't go away, come back!";
});
window.addEventListener("focus", () => {
	document.title = previousTitle;
});

window.addEventListener("load", function () {
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
