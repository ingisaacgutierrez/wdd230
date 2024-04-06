const jsonURL = "https://ingisaacgutierrez.github.io/wdd230/final_project/data/pricing.json";

function createTableFromJSON() {
    fetch(jsonURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const rentalData = data.max_rental_pricing;
        let tableHTML = "<table>";

        tableHTML += `
            <thead>
                <tr>
                    <th class="max_price" colspan="6">Max Rental Pricing</th>
                </tr>
                <tr>
                    <th colspan="2"></th>
                    <th class="reservation_walk" colspan="2">Reservation</th>
                    <th class="reservation_walk" colspan="2">Walk-in</th>
                </tr>
                <tr>
                    <th class="th" >Rental Type</th>
                    <th class="th" >Max Persons</th>
                    <th class="th" >Half Day</th>
                    <th class="th" >Full Day</th>
                    <th class="th" >Half Day</th>
                    <th class="th" >Full Day</th>
                </tr>
            </thead>
        `;

        rentalData.forEach(category => {
            category.rental_types.forEach(rental => {
                tableHTML += `
                    <tr>
                        <td>${rental.rental_type}</td>
                        <td>${rental.max_persons}</td>
                        <td>${rental.reservation.half_day}</td>
                        <td>${rental.reservation.full_day}</td>
                        <td>${rental.walk_in.half_day}</td>
                        <td>${rental.walk_in.full_day}</td>
                    </tr>
                `;
            });
        });

        tableHTML += "</table>";

        document.getElementById('rental_table').innerHTML = tableHTML;
    })
    .catch(error => {
        console.error('Could not fetch the data: ', error);
    });
}

document.addEventListener('DOMContentLoaded', createTableFromJSON);