import Toastify from "toastify-js";

emailjs.init("cmbu9tVx0xBzhilTM");
const btn = document.getElementById(".send-button");

document
	.querySelector("#message-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.querySelector(".name-input").value;
		const email = document.querySelector(".email-input").value;
		const message = document.querySelector(".message-input").value;

		btn.value = "Sending...";

		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};
		emailjs
			.send("service_fnc8jal", "template_htwlbzx", templateParams)
			.then((response) => {
				Toastify({
					text: "Message sent successfully!",
					duration: 3000,
					destination: "https://github.com/apvarun/toastify-js",
					newWindow: true,
					close: true,
					gravity: "top", // `top` or `bottom`
					position: "center", // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background:
							"linear-gradient(to right, #00b09b, #96c93d)",
					},
					onClick: function () {}, // Callback after click
				}).showToast();
				if (response.status === 200) {
					document.querySelector(".message-form").reset();
				}
			})
			.catch((error) => {
				btn.value = "Send Message";
				Toastify({
					text: "Something went wrong!",
					duration: 3000,
					destination: "https://github.com/apvarun/toastify-js",
					newWindow: true,
					close: true,
					gravity: "top", // `top` or `bottom`
					position: "center", // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background:
							//linear gradient rojo
							"linear-gradient(to right, #f85032, #e73827)",
					},
					onClick: function () {}, // Callback after click
				}).showToast();
			});
	});