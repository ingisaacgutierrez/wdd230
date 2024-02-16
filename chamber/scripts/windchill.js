let temp = document.getElementById("temp").innerHTML;
let wind = document.getElementById("wind").innerHTML;
let chill = windChill(temp, wind);
document.getElementById("chill").innerHTML = chill;

function windChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
      let twc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
      twc = Math.round(twc * 10) / 10;
        return twc;
    } else {
        return "N/A";
    }
}