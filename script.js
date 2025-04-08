
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

    const colors = [
      "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF",
      "#33FFF6", "#F6FF33", "#FF8C33", "#6E33FF", "#FF3364",
      "#33FFB5", "#B5FF33", "#3385FF", "#A633FF", "#FF5733",
      "#33FF57", "#5733FF", "#FF33F0", "#33C1FF", "#FFC133",
      "#C133FF", "#33FF8C", "#FF3364", "#33FFD9", "#D933FF",
      "#3364FF", "#FFB533", "#6EFF33", "#FF3385", "#33FF57",
      "#5757FF", "#FF33C1", "#33A6FF", "#FF6E33", "#C1FF33",
      "#33FFEC", "#EC33FF", "#336EFF", "#FFD933", "#8CFF33",
      "#FF33A6", "#33FFC1", "#C1FF33", "#3364FF", "#FFA633",
      "#33FF57", "#57FF33", "#FF33B5", "#33FF85", "#FF33F6"
    ];

    function changeColor() {
      const color = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = color;

      const bg = document.querySelector('.background-shape');
      if (bg) bg.style.backgroundColor = color;

      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
      headings.forEach(el => {
        el.style.color = '#fff';
      });
    }

    changeColor();
    setInterval(changeColor, 20000);
