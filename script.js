
function openWhatsApp() {
        var phoneNumber = "#"; // Apna number daaliye
        var message = "Hello, I am interested in services.";
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappLink, '_blank');
    }
 function toggleMenu() {
      const nav = document.getElementById('nav');
      const toggleBtn = document.getElementById('toggleBtn');
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    }

    const bgColors = [
      "#f1c40f", "#e67e22", "#9b59b6", "#1abc9c", "#3498db", "#e74c3c", "#2ecc71", "#ff6f61"
    ];

    const darkShades = [
      "#111", "#1e1e1e", "#222", "#141414", "#191919", "#0f0f0f", "#171717", "#1a1a1a"
    ];

    let i = 0;
    const whoWeAre = document.querySelector('.who-we-are'); // Add this

setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const newColor = colors[currentColorIndex];
  dynamicBg.style.backgroundColor = newColor;
  if (whoWeAre) {
    whoWeAre.style.backgroundColor = newColor; // You can change this to style.color for text
  }
}, 20000);
