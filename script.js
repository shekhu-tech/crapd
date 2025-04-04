
    document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Toggle
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });


  });

   document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "ONE.jpg",
        "THREE.jpg",
         "FOUR.jpg",
          "FIVE.jpg",
           "SIX.jpg",
        "TWO.jpg"
    ];
    
    let index = 0;
    function changeBackground() {
        document.getElementById("home").style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 3000); // Har 5 sec me change hoga
   });
  document.addEventListener("DOMContentLoaded", () => {
    const scrollingWrapper = document.querySelector(".scrolling-wrapper");

    function autoScroll() {
        scrollingWrapper.scrollBy({
            left: 1,
            behavior: 'smooth'
        });

        if (scrollingWrapper.scrollLeft + scrollingWrapper.clientWidth >= scrollingWrapper.scrollWidth) {
            scrollingWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }

    setInterval(autoScroll, 20); // Speed of scrolling (Lower value = Faster)
   });

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Slide changes every 3 seconds
  });
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
   }
  // Toggle Mobile Menu
  function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let toggle = document.querySelector(".menu-toggle");
    
    menu.classList.toggle("active");

    // Toggle icon change (☰ to ✖)
    if (menu.classList.contains("active")) {
        toggle.innerHTML = "✖";
    } else {
        toggle.innerHTML = "☰";
    }
   }
   function openWhatsApp() {
        var phoneNumber = "918395913829"; // Apna number daaliye
        var message = "Hello, I am interested in services.";
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappLink, '_blank');
    }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmTDmDfFm7ochTgoSBVUutw6bXrcmkSSU",
  authDomain: "portfolio-19b3b.firebaseapp.com",
  projectId: "portfolio-19b3b",
  storageBucket: "portfolio-19b3b.firebasestorage.app",
  messagingSenderId: "664897980826",
  appId: "1:664897980826:web:90a47bfd9e6b308f75d223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function loadHeroSection() {
  const querySnapshot = await getDocs(collection(db, "hero"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    document.querySelector(".hero-title").textContent = data.title;
    document.querySelector(".hero-subtitle").textContent = data.subtitle;
    document.querySelector(".hero-btn").textContent = data.buttonText;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadHeroSection();
});
