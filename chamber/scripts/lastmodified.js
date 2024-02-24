document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const modeButton = document.querySelector("#mode");


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
});

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
    const sidebar = document.querySelector(".sidebar");
    const pictureContent = document.querySelector(".picture-content");

    if (modeButton.textContent.includes("🕶️")) {
        document.querySelector("#mode").textContent = "🔆";
        document.documentElement.setAttribute('data-theme', 'dark'); 
    } else {
        document.querySelector("#mode").textContent = "🕶️";
        document.documentElement.setAttribute('data-theme', 'light'); 
    }

    main.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#343434" : "#eee";
    header.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#232323" : "";
    header.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    footer.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#111111" : "";
    footer.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#7A7A7A" : "";
    nav.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#7A7A7A" : "";
    nav.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    button.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#7A7A7A" : "";
    button.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ADE8F4" : "";
    mainContent.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#575757" : "";
    mainContent.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    cards.forEach(card => {
        card.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#575757" : "";
        card.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    });
    card1.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#575757" : "";
    card1.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    card2.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#575757" : "";
    card2.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    card3.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#575757" : "";
    card3.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    gyerecordsH2.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    cardP.forEach(p => { 
        p.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : ""; 
    });
    cardH3.forEach(h3 => { 
        h3.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : ""; 
    });
    cardA.forEach(a => { 
        a.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : ""; 
    });
    sidebar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#343434" : "";
    sidebar.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
    pictureContent.style.background = document.documentElement.getAttribute('data-theme') === 'dark' ? "#343434" : "";
    pictureContent.style.color = document.documentElement.getAttribute('data-theme') === 'dark' ? "#ffffff" : "";
});
