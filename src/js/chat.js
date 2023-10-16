emailjs.init("cmbu9tVx0xBzhilTM");
const btn = document.querySelector(".send-button");

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
				alert("Your message has been sent!");
			})
			.catch((error) => {
				alert("Something went wrong..." + error);
			});
	});
