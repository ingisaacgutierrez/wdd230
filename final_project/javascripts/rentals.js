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
    displayLinks(data.max_rental_pricing);
}

function displayLinks(links) {
    members_info.innerHTML = ''; 
    links.forEach(link => {
        link.rental_types.forEach(type => {
            const article = document.createElement('article');
            article.classList.add('rental_list');

            if (mode === 'grid') {
                article.innerHTML = `
                    <img src="${type.imgurl}" alt="${type.rental_type}">
                    <h3>${type.rental_type}</h3>
                    <p>Max people: ${type.max_persons}</p>
                `;
            } else if (mode === 'list') {
                article.innerHTML = `
                    <h3>${type.rental_type}</h3>
                    <p>Max people: ${type.max_persons}</p>
                `;
            }

            members_info.appendChild(article);
        });
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