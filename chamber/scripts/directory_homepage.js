const baseURL = "https://ingisaacgutierrez.github.io/wdd230/chamber/data/members.json";
const recordDiv = document.querySelector('.record');

function filterAndLimitMembers(members, membershipLevels, limit) {
    let filteredMembers = members.filter(member => membershipLevels.includes(member.membershipLevel));
    filteredMembers.sort(() => Math.random() - 0.5);
    filteredMembers = filteredMembers.slice(0, limit);
    return filteredMembers;
}


async function getLinks() {
    const response = await fetch(baseURL);
    const data = await response.json();
    const filteredMembers = filterAndLimitMembers(data.members, ['Silver Membership', 'Gold Membership'], 3);
    displayLinks(filteredMembers);
}

function displayLinks(links) {
    recordDiv.innerHTML = ''; 
    links.forEach(link => {
        const section = document.createElement('section');
        section.classList.add('cardshomepage');
        section.innerHTML = `
            <h3>${link.name}</h3>
            <p class="pcongrats">${link.membershipLevel}</p>
            <p>${link.address}</p>
            <p>${link.phone}</p>
            <a href="${link.website}">${link.website}</a>
        `;
        recordDiv.appendChild(section);
    });
}


getLinks();
