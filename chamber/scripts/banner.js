window.onload = function() {
    let date = new Date();
    let day = date.getDay();

    if (day >= 1 && day <= 4) { 
        document.getElementById('banner').style.display = 'block';
    }

    document.getElementById('close-btn').onclick = function() {
        document.getElementById('banner').style.display = 'none';
    }
}
