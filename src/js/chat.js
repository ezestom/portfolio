emailjs.init("cmbu9tVx0xBzhilTM");

document
	.querySelector("#message-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.querySelector(".name-input").value;
		const email = document.querySelector(".email-input").value;
		const message = document.querySelector(".message-input").value;

		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		emailjs
			.send("service_fnc8jal", "template_htwlbzx", templateParams)
			.then((response) => {
				// alert("Your message has been sent!");
				Toastify({
					text: "Your message has been sent! ✅",
					className: "info",
					style: {
						background:
							"linear-gradient(to right, #00b09b, #96c93d)",
					},
				}).showToast();
				// Limpiar los campos de entrada
				document.querySelector(".name-input").value = "";
				document.querySelector(".email-input").value = "";
				document.querySelector(".message-input").value = "";
			})
			.catch((error) => {
				// alert("Something went wrong... " + error);
				Toastify({
					text: "Something went wrong! ❌ Please try again later.",
					className: "info",
					style: {
						background:
							"linear-gradient(to right, #ff416c, #ff4b2b)",
					},
				}).showToast();
			});
	});
