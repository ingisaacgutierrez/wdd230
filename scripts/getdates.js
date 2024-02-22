document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;

if (numVisits !== 0){
	visitsDisplay.textContent = numVisits;
}
else{
	visitsDisplay.textContent = `This is your first visit. 🥳  Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-1s",numVisits);