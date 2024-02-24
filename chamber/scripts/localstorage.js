function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

function displayVisitMessage() {
    const visitDate = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    
    if (!visitDate) {
        document.getElementById('visit-message').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(visitDate);
        const daysDifference = getDaysDifference(currentDate, lastVisitDate);

        if (daysDifference < 1) {
            document.getElementById('visit-message').textContent = "Back so soon! Awesome!";
        } else {
            const message = daysDifference === 1 ? "You last visited 1 day ago." : `You last visited ${daysDifference} days ago.`;
            document.getElementById('visit-message').textContent = message;
        }
    }

    localStorage.setItem('lastVisit', currentDate);
}

displayVisitMessage();