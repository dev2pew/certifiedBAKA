// IMPORTED FROM STACK OVERFLOW
// BY robbmj QUESTION ID 20618355
// REWORKED BY chatGPT

function startTimer(duration, display) {
    let start = Date.now(),
        diff,
        seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        seconds = (diff % 60) | 0;

        display.textContent = seconds;

        if (diff <= 0) {
            clearInterval(interval); // Stop the interval when the countdown reaches zero
        }
    }

    let interval = setInterval(timer, 1000);
}

window.onload = function () {
    const displayTime = 5 * 1,
        display = document.querySelector('#countdownREDIRECT');
    startTimer(displayTime, display);
};
