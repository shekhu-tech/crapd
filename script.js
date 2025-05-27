// Inject HEADER
document.getElementById('site-header').innerHTML = `
  <header> 
  <div class="logo">
    <a href="#">
      <img src="STI.png" alt="Shekhar tyagi" style="height: 35px;">
    </a>
  </div>

  <nav id="nav">
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

// Dynamic background color change
const colors = [
  "rgba(255, 87, 51, 0.6)",
  "rgba(255, 122, 92, 0.6)",
  "rgba(255, 160, 138, 0.6)",
  "rgba(204, 70, 41, 0.6)",
  "rgba(153, 53, 31, 0.6)",
  "rgba(255, 255, 255, 0.6)",
  "rgba(0, 0, 0, 0.6)"
];

function changeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  console.log("Color applied:", color);

  document.body.style.backgroundColor = color;

  const bg = document.querySelector('.background-shape');
  if (bg) bg.style.backgroundColor = color;

  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
  headings.forEach(el => el.style.color = '#fff');
}

console.log("changeColor script loaded");
changeColor();
setInterval(changeColor, 20000);


// WhatsApp Floating ButtoN
// WhatsApp Floating Button
//const whatsappButton = document.createElement('a');
//whatsappButton.href = 'https://wa.me/918395913829';
//whatsappButton.target = '_blank';
//whatsappButton.id = 'whatsapp-button';
//whatsappButton.title = 'Chat on WhatsApp';

//const icon = document.createElement('img');
//icon.src = 'https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png';
//icon.alt = 'WhatsApp';
//whatsappButton.appendChild(icon);
//document.body.appendChild(whatsappButton);

// Call Floating Button
//const callButton = document.createElement('a');
//callButton.href = 'tel:+918395913829';
//callButton.id = 'call-button';
//callButton.title = 'Call Now';

//const callIcon = document.createElement('img');
//callIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/phone.png';
//callIcon.alt = 'Call';
//callButton.appendChild(callIcon);
//document.body.appendChild(callButton);

// Message Floating Button + Popup Form
const msgBtn = document.createElement('button');
msgBtn.id = 'message-button';
msgBtn.title = 'Message Us';

const msgIcon = document.createElement('img');
msgIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sms.png';
msgIcon.alt = 'Message';
msgBtn.appendChild(msgIcon);
document.body.appendChild(msgBtn);

// Popup HTML
const popupOverlay = document.createElement('div');
popupOverlay.id = 'popupForm';
popupOverlay.innerHTML = `
  <div class="popup-content">
    <span class="popup-close" onclick="closePopup()">×</span>
    <h2>Tell Us</h2>
    <form id="contactForm">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="tel" name="phone" placeholder="Your Number" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <input type="text" name="location" placeholder="Where Are You From" required>
      <textarea rows="4" name="message" placeholder="Your Message" required></textarea>
      <input type="hidden" name="_subject" value="New Message from Portfolio!">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <button type="submit">Submit</button>
    </form>
    <div id="successMsg" style="display:none; margin-top:10px; color:green;">✅ Message Sent!</div>
  </div>
`;
document.body.appendChild(popupOverlay);

// Button triggers popup
msgBtn.onclick = () => {
  document.getElementById('popupForm').style.display = 'flex';
}

// Close function
function closePopup() {
  document.getElementById('popupForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'none';
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch('https://formsubmit.co/crapdindia@gmail.com', {
    method: 'POST',
    body: data
  })
    .then(response => {
      if (response.ok) {
        form.reset();
        document.getElementById('successMsg').style.display = 'block';
        setTimeout(closePopup, 2500);
      } else {
        alert('Something went wrong. Try again!');
      }
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
});

// Card Click Toggle
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});



// Card Click Toggle
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});
