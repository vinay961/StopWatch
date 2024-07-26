window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let timer;

    const displayMinutes = document.getElementById("minutes");
    const displaySeconds = document.getElementById("seconds");
    const displayMilliseconds = document.getElementById("milliseconds");

    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);

    function updateDisplay() {
        displayMilliseconds.innerText = formatTime(milliseconds);
        displaySeconds.innerText = formatTime(seconds);
        displayMinutes.innerText = formatTime(minutes);
    }

    function startTimer() {
        stopTimer(); // Ensure no overlapping timers
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function resetTimer() {
        stopTimer();
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
    }

    function formatTime(value) {
        return value < 10 ? `0${value}` : value;
    }
};
