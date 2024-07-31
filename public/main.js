document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM fully loaded");

  // Carousel logic
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const images = carousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    // Auto-advance every 5 seconds
    setInterval(nextImage, 5000);
  } else {
    console.log("Carousel not found");
  }

  const chartContainer = document.getElementById("chartContainer");
  if (chartContainer) {
    const canvas = document.createElement("canvas");
    chartContainer.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Characters",
          "Organizations",
          "Locations",
          "Conspiracies",
          "Technologies",
          "Episodes",
          "Quotes",
          "Seasons",
        ],
        datasets: [
          {
            label: "Number of Items",
            data: [10, 7, 12, 16, 12, 18, 44, 2],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Standard API Endpoints",
            data: [2, 2, 2, 2, 2, 2, 2, 2],
            backgroundColor: "rgba(255, 159, 64, 0.6)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
          {
            label: "Custom API Endpoints",
            data: [3, 1, 1, 1, 1, 0, 1, 0],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Inside Verse API Statistics Routes",
            font: {
              size: 18,
            },
          },
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Count",
            },
          },
          x: {
            title: {
              display: true,
              text: "Categories",
            },
          },
        },
      },
    });
  } else {
    console.log("Chart container not found");
  }

  // Copy to clipboard logic
  const documentation = document.getElementById("documentation");
  if (documentation) {
    documentation.addEventListener("click", (event) => {
      // console.log("Click event on documentation");
      const codeElement = event.target.closest("code[url]");
      if (codeElement) {
        // console.log("Clicked on code element:", codeElement);
        const url = codeElement.getAttribute("url");
        if (url) {
          // console.log("URL to copy:", url);
          if (navigator.clipboard) {
            navigator.clipboard
              .writeText(url)
              .then(() => {
                console.log("Copied to clipboard : " + url);
                // Retour visuel amélioré
                const originalText = codeElement.textContent;
                const originalClass = codeElement.className;
                codeElement.textContent = "Copied!";
                codeElement.classList.add("copied");
                setTimeout(() => {
                  codeElement.textContent = originalText;
                  codeElement.className = originalClass;
                }, 1500);
              })
              .catch((err) => {
                console.error("Failed to copy: ", err);
                fallbackCopyTextToClipboard(url);
              });
          } else {
            console.log("Clipboard API not available, using fallback");
            fallbackCopyTextToClipboard(url);
          }
        }
      }
    });
  } else {
    // console.log("Documentation element not found");
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
});

function toggleModal(event) {
  event.preventDefault();
  const target = event.target.getAttribute("data-target");
  const modal = document.getElementById(target);

  if (modal) {
    if (modal.open) {
      modal.close();
    } else if (modal.showModal) {
      modal.showModal();
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach(function(tooltip) {
    const url = tooltip.getAttribute('url');
    if (url) {
      const tooltipText = document.createElement('span');
      tooltipText.className = 'tooltiptext';
      tooltipText.textContent = url;
      tooltip.appendChild(tooltipText);
    }
  });
});
