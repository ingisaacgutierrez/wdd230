const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#passwordconfirmation");
const message = document.querySelector("#formmessage");

ps2.addEventListener("focusout", checkSame);

function checkSame() {
	if (ps1.value !== ps2.value) {
		message.textContent = "Passwords DO NOT MATCH! ❌";
		message.style.visibility = "show";
		ps2.style.backgroundColor = "#eee";
		ps2.value = "";
		ps2.focus();
	} else {
		message.style.display = "none";
		ps2.style.backgroundColor = "#eee";
		ps2.style.color = "#000";
	}
}

function updateValue(val) {
    document.getElementById('rangevalue').innerText = val;
}
