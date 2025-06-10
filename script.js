// Inject HEADER
document.getElementById('site-header').innerHTML = `
  <header> 
  <div class="logo">
    <a href="#">
      <img src="#" alt="Crapd.in" style="height: 35px;">
    </a>
  </div>

  <nav id="nav">
   <button id="closeNav" class="close-btn">×</button>
    <a href="allgd.html"><i class="fas fa-pen-nib"></i> Graphics</a>
    <a href="allved.html"><i class="fas fa-film"></i> Video Editing</a>
    <a href="allweb.html"><i class="fas fa-globe"></i> Websites</a>
    <a href="jobprtls.html"><i class="fas fa-globe"></i> Portals</a>
    <a href="dgtlmktng.html"><i class="fas fa-search"></i> Digital Marketing</a>
  </nav>

  <div class="toggle" onclick="toggleMenu()" id="toggleBtn">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</header>

<!-- Font Awesome CDN for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
`;

// Toggle menu
function toggleMenu() {
  const nav = document.getElementById('nav');
  const toggleBtn = document.getElementById('toggleBtn');
  nav.classList.toggle('active');
  toggleBtn.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeNav');
  const nav = document.getElementById('nav');
  const toggleBtn = document.getElementById('toggleBtn');

  if (closeBtn && nav && toggleBtn) {
    closeBtn.addEventListener('click', () => {
      nav.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  }
});

// Inject FOOTER
document.getElementById('site-footer').innerHTML = `
  <footer class="footer-glow">
  <div class="footer-container">
    <div class="footer-section">
      <div class="footer-buttons">
        <a href="privacy.html" class="footer-btn" title="Privacy Policy">Privacy Policy</a>
        <a href="aboutme.html" class="footer-btn" title="Meet Me">Meet Me</a>
        <a href="index.html" class="footer-btn" title="Home">Home</a>
        <a href="gd.html" class="footer-btn" title="Graphic Designing">Graphic Designing</a>
        <a href="ve.html" class="footer-btn" title="Video Editing">Video Editing</a>
        <a href="wd.html" class="footer-btn" title="Website Designing">Website Designing</a>
        <a href="portals.html" class="footer-btn" title="Portals">Portals</a>
        <a href="https://shekhu-tech.github.io/tamannaSharmaSonipat/" class="footer-btn" title="Mehndi">Mehndi</a>
        <a href="dm.html" class="footer-btn" title="Digital Marketing">Digital Marketing</a>
      </div>
    </div>

    <p style="text-align: center; margin-top: 20px;">&copy; 2025 Shekhar Tyagi. All Rights Reserved.</p>
  </div>
</footer>

<style>
/* Glowing border effect (no changes needed for responsiveness here) */
.footer-glow {
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid #fff5c4;
  border-radius: 20px;
  background: linear-gradient(135deg, #fdf5d6, goldenrod);
  box-shadow: 0 0 20px gold, 0 0 40px #fdf5d6, 0 0 60px goldenrod;
  transition: all 0.4s ease-in-out;
}

/* Footer buttons - Updated for responsiveness */
.footer-buttons {
  margin-top: 20px;
  text-align: center; /* Keeps existing center alignment for the container */
  display: flex; /* Enable flexbox */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: center; /* Center buttons horizontally when they wrap */
  gap: 10px; /* Add space between buttons */
}

.footer-btn {
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid white;
  transition: background-color 0.3s ease, color 0.3s ease;
  flex-shrink: 0; /* Prevent buttons from shrinking too much */
}

.footer-btn:hover {
  background-color: #3498db;
  color: white;
}

/* Media Queries for smaller screens */
@media (max-width: 768px) {
  .footer-btn {
    flex-basis: calc(50% - 20px); /* Two buttons per row on medium screens, accounting for gap */
    margin: 5px; /* Adjust margin for smaller screens */
  }
}

@media (max-width: 480px) {
  .footer-btn {
    flex-basis: 100%; /* Full width for each button on small screens */
    margin: 5px 0; /* Adjust margin for stacked buttons */
  }
}

/* Optional icon styling (no changes needed for responsiveness here) */
.footer-icons img {
  width: 40px;
  margin: 5px;
  transition: transform 0.2s ease;
}

.footer-icons img:hover {
  transform: scale(1.1);
}
</style>
`;
