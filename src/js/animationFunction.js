import { linkedin } from "../json/jsonAnimations";
import { github } from "../json/jsonAnimations";
import { folder } from "../json/jsonAnimations";

const animations = [
	{ element: document.getElementById("animation-github"), json: github },
	{ element: document.getElementById("animation-linkedin"), json: linkedin },
	{ element: document.getElementById("animation-folder"), json: folder },
];

animations.forEach(({ element, json }) => {
	if (element) {
		let animationData = {
			container: element,
			renderer: "svg",
			loop: true,
			autoplay: true, // Cambiar a false para detener la animación al inicio
			animationData: json,
		};

		let anim = lottie.loadAnimation(animationData);

		// Detener la animación al inicio
		anim.stop();

		// Agregar eventos de escucha para hover
		element.addEventListener("mouseover", () => {
			anim.play(); // Reproducir la animación cuando el usuario hace hover
		});

		element.addEventListener("mouseout", () => {
			anim.stop(); // Detener la animación cuando el usuario sale del hover
		});
	}
});
