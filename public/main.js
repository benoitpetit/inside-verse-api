document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
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
});

const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "line",
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
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Number of Items per Category",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Items",
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
