const toggleBtn = document.getElementById("toggleBtn");
    const mobileNav = document.getElementById("mobileNav");

    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("open");
      mobileNav.classList.toggle("active");
    });
function openWhatsApp() {
        var phoneNumber = "918395913829"; // Apna number daaliye
        var message = "Hello, I am interested in services.";
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappLink, '_blank');
    }
