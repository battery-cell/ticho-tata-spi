const ct = document.getElementById('current-time');
const ncd = document.getElementById('nocczydzien');

function updateTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	ct.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateNocczydzien() {
	const now = new Date();
	const startOfYear = new Date(now.getFullYear(), 0, 1);
	const diffInMs = now - startOfYear;
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;
	ncd.textContent = `Noc czzy dzień: ${diffInDays}`;
}

setInterval(updateTime, 1000);
setInterval(updateNocczydzien, 86400000); // Update once a day

while (true) {
    updateTime();
    updateNocczydzien();
}