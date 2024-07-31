document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetchQuotes");
  const quoteLog = document.getElementById("quoteLog");
  const cooldownTimer = document.getElementById("cooldownTimer");
  let isFetching = false;
  let canFetch = true;
  let cooldownTime = 15; // 30 seconds cooldown
  let cooldownInterval;

  function updateCooldownDisplay(seconds) {
    if (seconds > 0) {
      cooldownTimer.textContent = `(${seconds}s)`;
      fetchButton.disabled = true;
    } else {
      cooldownTimer.textContent = "";
      fetchButton.disabled = false;
    }
  }

  function startCooldown() {
    let secondsLeft = cooldownTime;
    updateCooldownDisplay(secondsLeft);

    cooldownInterval = setInterval(() => {
      secondsLeft--;
      updateCooldownDisplay(secondsLeft);

      if (secondsLeft <= 0) {
        clearInterval(cooldownInterval);
        canFetch = true;
      }
    }, 1000);
  }

  fetchButton.addEventListener("click", () => {
    if (isFetching || !canFetch) return;

    isFetching = true;
    canFetch = false;
    fetchButton.disabled = true;
    quoteLog.innerHTML = "Fetching quotes...";

    fetch("https://inside-verse-api.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Quotes:", data);
        quoteLog.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch((error) => {
        // console.error("Error:", error);
        quoteLog.innerHTML = `Error: ${error.message}`;
      })
      .finally(() => {
        isFetching = false;
        startCooldown();
      });
  });

  // Initialize button state
  updateCooldownDisplay(0);
});
