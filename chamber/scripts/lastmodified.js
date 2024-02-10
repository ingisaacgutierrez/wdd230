document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
});

const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", () => {
    const main = document.querySelector("main");
    const header = document.querySelector("#header");
    const footer = document.querySelector("footer");
    const nav = document.querySelector("nav");
    const button = document.querySelector(".hero button");
    const mainContent = document.querySelector(".main-content");
    const cards = document.querySelectorAll(".card");
    const card1 = document.querySelector(".card1");
    const card2 = document.querySelector(".card2");
    const card3 = document.querySelector(".card3");
    const gyerecordsH2 = document.querySelector(".gye-records h2");
    const cardP = document.querySelectorAll(".main-content p, .card p, .main-content h2, .card h2"); 
    const cardH3 = document.querySelectorAll(".card1 h3, .card2 h3, .card3 h3"); 
    const cardA = document.querySelectorAll(".card1 a, .card2 a, .card3 a"); 
    const heroImage = document.querySelector(".hero img"); // Selección de la imagen



    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#343434";
        header.style.background = "#232323";
        header.style.color = "#ffffff"; 
        footer.style.background = "#111111";
        footer.style.color = "#7A7A7A"; 
        nav.style.background = "#7A7A7A";
        nav.style.color = "#ffffff"; 
        button.style.background = "#7A7A7A";
        button.style.color = "#ADE8F4"; 
        mainContent.style.background = "#575757";
        mainContent.style.color = "#ffffff"; 
        cards.forEach(card => {
            card.style.background = "#575757";
            card.style.color = "#ffffff"; 
        });
        card1.style.background = "#575757";
        card1.style.color = "#ffffff"; 
        card2.style.background = "#575757";
        card2.style.color = "#ffffff"; 
        card3.style.background = "#575757";
        card3.style.color = "#ffffff"; 
        gyerecordsH2.style.color = "#ffffff"; 
        cardP.forEach(p => { 
            p.style.color = "#ffffff"; 
        });
        cardH3.forEach(h3 => { 
            h3.style.color = "#ffffff"; 
        });
        cardA.forEach(a => { 
            a.style.color = "#ffffff"; 
        });
		heroImage.style.opacity = "0.8"; 
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        header.style.background = "";
        header.style.color = "";
        footer.style.background = "";
        footer.style.color = "";
        nav.style.background = "";
        nav.style.color = "";
        button.style.background = "";
        button.style.color = "";
        mainContent.style.background = "";
        mainContent.style.color = "";
        cards.forEach(card => {
            card.style.background = "";
            card.style.color = "";
        });
        card1.style.background = "";
        card1.style.color = "";
        card2.style.background = "";
        card2.style.color = "";
        card3.style.background = "";
        card3.style.color = "";
        gyerecordsH2.style.color = ""; 
        cardP.forEach(p => { 
            p.style.color = ""; 
        });
        cardH3.forEach(h3 => { 
            h3.style.color = ""; 
        });
        cardA.forEach(a => { 
            a.style.color = ""; 
        });
		heroImage.style.opacity = "1";
        modeButton.textContent = "🕶️";
    }
});