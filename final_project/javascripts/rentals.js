const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members_info");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}




const baseURL = "https://ingisaacgutierrez.github.io/wdd230/final_project/data/pricing.json";
const members_info = document.querySelector('#members_info');
let mode = 'grid'; 

async function getLinks() {
    const response = await fetch(baseURL);
    const data = await response.json();
    displayLinks(data.members);
}

function displayLinks(links) {
    members_info.innerHTML = ''; 
    links.forEach(link => {
        const article = document.createElement('article');
        article.classList.add('directorylist');

        if (mode === 'grid') {
            article.innerHTML = `
                <img src="${link.logo}" alt="${link.name}">
                <p>${link.membershipLevel}</p>
                <p>${link.address}</p>
                <p>${link.phone}</p>
                <p><a href="${link.linkedin}">${link.linkedin}</a></p>
                <p><a href="${link.website}">${link.website}</a></p>
            `;
        } else if (mode === 'list') {
            article.innerHTML = `
                <h3>${link.name}</h3>
                <p>${link.membershipLevel}</p>
                <p>${link.address}</p>
                <p>${link.phone}</p>
                <p><a href="${link.linkedin}">${link.linkedin}</a></p>
                <p><a href="${link.website}">${link.website}</a></p>
            `;
        }

        members_info.appendChild(article);
    });
}

getLinks();

gridbutton.addEventListener("click", () => {
    mode = 'grid';
    getLinks();
});

listbutton.addEventListener("click", () => {
    mode = 'list';
    getLinks();
});