function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds;
}

function updateMode() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 18 || hour < 6) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

updateTime();
updateMode();
setInterval(updateTime, 1000);
setInterval(updateMode, 60000);
