// IMPORTED FROM FLEXPIE.COM
// CODE INTEGRATED AND FIXED BY SUB2PEW

setInterval(currentTime, 1000); // sub2pew: TIME INTERVAL

function currentTime() {
    let date = new Date(); 

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dayPeriod = "AM";

    if (hh == 0) {
        hh = 12;
    }

    if (hh == 12) { // sub2pew: IF TIME EQUALS 12 IN 24-HOUR FORMAT, OVERRIDE 00 TO 12
        hh = 12;
        dayPeriod = "PM"
    }

    if (hh > 12) {
        hh = hh - 12;
        dayPeriod = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let currentTime = hh + ":" + mm + ":" + ss + " " + dayPeriod;

    document.getElementById("headMENUtime").innerText = currentTime;
}

currentTime();
