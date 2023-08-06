emailjs.init("cmbu9tVx0xBzhilTM");

document
	.getElementById("message-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("name-input").value;
		const email = document.getElementById("email-input").value;
		const message = document.getElementById("message-input").value;

		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};
		emailjs
			.send("service_fnc8jal", "template_htwlbzx", templateParams)
			.then((response) => {
				alert("Mensaje enviado con éxito.");
			})
			.catch((error) => {
				console.error("Error al enviar el mensaje:", error);
				alert("Hubo un error al enviar el mensaje.");
			});
	});
