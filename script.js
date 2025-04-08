
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
     "#ff6f61", "#6b5b95", "#88b04b", "#f7cac9", "#92a8d1", "#955251", "#b565a7",
    "#009b77", "#dd4124", "#d65076", "#45b8ac", "#e15d44", "#7fcdcd", "#bc243c",
    "#c3447a", "#98b4d4", "#b7b8b6", "#f7786b", "#6b5b95", "#deeaee", "#763568",
    "#f0e68c", "#8fbc8f", "#e9967a", "#dda0dd", "#ffb6c1", "#4682b4", "#9acd32",
    "#ff8c00", "#6495ed", "#20b2aa", "#db7093", "#cd5c5c", "#40e0d0", "#ff1493",
    "#483d8b", "#00fa9a", "#8a2be2", "#00ced1", "#dc143c", "#9932cc", "#ff6347",
    "#00bfff", "#f5deb3", "#adff2f", "#9370db", "#ff4500", "#ffd700", "#7fffd4",
    "#ba55d3"
  ];

  function changeBgColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const whoSection = document.querySelector(".who-we-are");
    if (whoSection) {
      whoSection.style.backgroundColor = randomColor;
    }
    document.body.style.backgroundColor = randomColor;
  }

  changeBgColor(); // Initial
  setInterval(changeBgColor, 20000); // Every 20 seconds
