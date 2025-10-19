function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

updateTime();

// Optional: Update every second for realism
setInterval(updateTime, 1000);
