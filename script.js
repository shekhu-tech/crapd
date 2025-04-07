const toggleBtn = document.getElementById("toggleBtn");
    const mobileNav = document.getElementById("mobileNav");

    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("open");
      mobileNav.classList.toggle("active");
    });