const tracker = document.querySelector(".cursor-tracker");
const trackerSize = tracker.offsetWidth;
const container = document.querySelector(".swiper-container-testimonials");

let trackerX = 0;
let trackerY = 0;
let mouseX = 0;
let mouseY = 0;
const speed = 0.00003; // Ajusta la velocidad de seguimiento según sea necesario
const offset = 1; // Ajusta el desplazamiento del cursor-tracker respecto al puntero

// Agregar evento mousemove al contenedor
container.addEventListener("mousemove", (e) => {
	mouseX = e.clientX - container.getBoundingClientRect().left; // Corregir posición en relación al contenedor
	mouseY = e.clientY - container.getBoundingClientRect().top; // Corregir posición en relación al contenedor

	// Verificar si el ratón está dentro del contenedor
	if (
		mouseX >= 0 &&
		mouseY >= 0 &&
		mouseX <= container.offsetWidth &&
		mouseY <= container.offsetHeight
	) {
		// El ratón está dentro del contenedor
		tracker.style.opacity = "1";
		updatePosition();
	}
});

const updatePosition = () => {
	const distanceX = mouseX - (trackerX + trackerSize / 2);
	const distanceY = mouseY - (trackerY + trackerSize / 2);

	trackerX += distanceX * speed;
	trackerY += distanceY * speed;

	tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`;

	// Usar requestAnimationFrame para animar suavemente
	requestAnimationFrame(updatePosition);
};

// Iniciar la animación al cargar la página
window.onload = () => {
	updatePosition();
};
