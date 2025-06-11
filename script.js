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
    <a href="gyan.html"><i class="fas fa-question-circle"></i> Why was I born?</a>
<a href="sevenchor.html"><i class="fas fa-child"></i> My Body Control</a>
<a href="career.html"><i class="fas fa-briefcase"></i> Career Counseling</a>
<a href="aura.html"><i class="fas fa-hand-sparkles"></i> Know Your Aura</a>
<a href="importance.html"><i class="fas fa-users"></i> Whose Life Am I Important To?</a>
<a href="relationships.html"><i class="fas fa-heart"></i> Who is Important in My Life?</a>
<a href="iq.html"><i class="fas fa-brain"></i> My IQ Level</a>
<a href="uniqueness.html"><i class="fas fa-star"></i> Am I Average?</a>
<a href="morality.html"><i class="fas fa-balance-scale"></i> Am I Evil or Good?</a>
<a href="shadow-self.html"><i class="fas fa-moon"></i> Dark Inside Me</a>
<a href="inner-good.html"><i class="fas fa-sun"></i> Good Inside Me</a>
<a href="talent.html"><i class="fas fa-lightbulb"></i> Know Your Talent</a>
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
        <a href="gyan.html" class="footer-btn" title="Why was I born?"><i class="fas fa-question-circle"></i> Why was I born?</a>
<a href="sevenchor.html" class="footer-btn" title="My Body Control"><i class="fas fa-child"></i> My Body Control</a>
<a href="career.html" class="footer-btn" title="Career Counseling"><i class="fas fa-briefcase"></i> Career Counseling</a>
<a href="aura.html" class="footer-btn" title="Know Your Aura"><i class="fas fa-hand-sparkles"></i> Know Your Aura</a>
<a href="importance.html" class="footer-btn" title="Whose Life Am I Important To?"><i class="fas fa-users"></i> Whose Life Am I Important To?</a>
<a href="relationships.html" class="footer-btn" title="Who is Important in My Life?"><i class="fas fa-heart"></i> Who is Important in My Life?</a>
<a href="iq.html" class="footer-btn" title="My IQ Level"><i class="fas fa-brain"></i> My IQ Level</a>
<a href="uniqueness.html" class="footer-btn" title="Am I Average?"><i class="fas fa-star"></i> Am I Average?</a>
<a href="morality.html" class="footer-btn" title="Am I Evil or Good?"><i class="fas fa-balance-scale"></i> Am I Evil or Good?</a>
<a href="shadow-self.html" class="footer-btn" title="Dark Inside Me"><i class="fas fa-moon"></i> Dark Inside Me</a>
<a href="inner-good.html" class="footer-btn" title="Good Inside Me"><i class="fas fa-sun"></i> Good Inside Me</a>
<a href="talent.html" class="footer-btn" title="Know Your Talent"><i class="fas fa-lightbulb"></i> Know Your Talent</a>
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
