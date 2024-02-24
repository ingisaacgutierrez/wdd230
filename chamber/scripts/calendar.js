var date = new Date();

var month = date.getMonth();
var year = date.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function createCalendar(month, year) {
    var firstDay = new Date(year, month).getDay();

    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    var calendar = '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

    for (let i = 0; i <= daysInMonth; i++) {
        if (i < firstDay) {
            calendar += '<td></td>';
        } else {
            if (i - firstDay + 1 === todayDay && month === todayMonth && year === todayYear) {
                calendar += '<td class="today">' + (i - firstDay + 1) + '</td>';
            } else {
                calendar += '<td>' + (i - firstDay + 1) + '</td>';
            }
        }

        if ((i + 1) % 7 === 0) {
            calendar += '</tr><tr>';
        }
    }

    calendar += '</tr></table>';

    return calendar;
}


function updateCalendar(month, year) {
    document.getElementById('calendar').innerHTML = createCalendar(month, year);
    document.getElementById('month-year').textContent = months[month] + ' ' + year;
}

document.getElementById('prev').addEventListener('click', function() {
    if (month === 0) {
        month = 11;
        year--;
    } else {
        month--;
    }
    updateCalendar(month, year);
});

document.getElementById('next').addEventListener('click', function() {
    if (month === 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    updateCalendar(month, year);
});

updateCalendar(month, year);

