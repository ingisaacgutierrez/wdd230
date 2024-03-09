const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members_info"); // Actualizado a #members_info

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}





const baseURL = "https://ingisaacgutierrez.github.io/wdd230/chamber/data/members.json";
const members_info = document.querySelector('#members_info');

async function getLinks() {
    const response = await fetch(baseURL);
    const data = await response.json();
    displayLinks(data.members);
}

function displayLinks(links) {
    
    
    links.forEach(link => {
        const article = document.createElement('article');
        article.classList.add('directorylist');
        article.innerHTML = `
            <h3>${link.name}</h3>
            <p>Address: ${link.address}</p>
            <p>Phone Number: ${link.phone}</p>
            <p>Website: <a href="${link.website}">${link.website}</a></p>
            <img src="${link.logo}" alt="${link.name}">
            <p>Membership Level: ${link.membershipLevel}</p>
            <p>LinkedIn: <a href="${link.linkedin}">${link.linkedin}</a></p>
        `;

        members_info.appendChild(article);
    });
}

getLinks();





