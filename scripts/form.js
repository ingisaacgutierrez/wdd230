const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#passwordconfirmation");
const message = document.querySelector("#formmessage");

ps2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (ps1.value !== ps2.value) {
		message.textContent = "Key Phrases DO NOT MATCH! ❌";
		message.style.visibility = "show";
		ps2.style.backgroundColor = "#fff0f3";
		ps2.value = "";
		ps2.focus();
	} else {
		message.style.display = "none";
		ps2.style.backgroundColor = "#fff";
		ps2.style.color = "#000";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Function to handle form submission
	function handleSubmit(event) {
		// Prevent default form submission
		event.preventDefault();

		// Access form elements
		let formt = event.target;
		let formData = new FormData(formt);

		// Display form element values
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}