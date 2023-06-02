// from flexpie.com
// modified by sub2pew & chatGPT

setInterval(currentTime, 1000);

function currentTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let dayPeriod = "AM";

  if (hh === 0) {
    hh = 12;
  } else if (hh === 12) {
    dayPeriod = "PM";
  } else if (hh > 12) {
    hh = hh - 12;
    dayPeriod = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let currentTime = hh + ":" + mm + ":" + ss + " " + dayPeriod;

  document.getElementById("headMENUtime").textContent = currentTime;
}

currentTime();
