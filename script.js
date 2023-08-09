const countdownDate = new Date("August 13, 2023 00:00:00 UTC").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    let footerText = "The clock is ticking.."

    if (days === 4) {
        footerText = "Doomsday is getting closer.";
    } else if (days === 3) {
        footerText = "The end is near.";
    } else if (days === 2) {
        footerText = "Time is running out.";
    } else if (days === 1) {
        footerText = "The final countdown.";
    } else if (days === 0) {
        footerText = "Doomsday is upon us.";
    }

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const formattedTime = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById("countdown").innerText = formattedTime;
    document.querySelector(".footerthingidk").innerText = footerText;
}

updateCountdown();
setInterval(updateCountdown, 1000);
