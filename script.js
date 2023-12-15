let stopwatch;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function startStopwatch() {
    if (!isRunning) {
        stopwatch = setInterval(updateDisplay, 1000);
        document.getElementById('startBtn').disabled = true;
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatch);
    document.getElementById('startBtn').disabled = false;
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    document.getElementById('startBtn').disabled = false;
    isRunning = false;
    seconds = -1;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
