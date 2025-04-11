
 function toggleMenu() {
      const nav = document.getElementById('nav');
      const toggleBtn = document.getElementById('toggleBtn');
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    }

   const colors = [
  "#FF5733", "#FF7A5C", "#FFA08A", "#CC4629", "#99351F", "#FFFFFF", "#000000", "#FFB3A3", "#FF3300", "#FF330D",
  "#D9826E", "#B06B5B", "#8C2E1C", "#FF6A3C", "#FF9982", "#FF7E4D", "#FF8F70", "#FF9982", "#CC4629", "#D98F7D",
  "#33FF57", "#5CFF79", "#8AFFA2", "#29CC46", "#1F9935", "#FFFFFF", "#000000", "#A3FFB8", "#00FF3F", "#00FF40",
  "#6ED98A", "#5BB06F", "#2E8C3E", "#3CFF66", "#82FF9A", "#70FF8F", "#4DFF7E", "#82FFA2", "#29CC46", "#7DD98F",
  "#3357FF", "#5C79FF", "#8AA2FF", "#2946CC", "#1F3599", "#FFFFFF", "#000000", "#A3B8FF", "#003FFF", "#0040FF",
  "#6E7ED9", "#5B6FB0", "#2E3E8C", "#3C66FF", "#829AFF", "#708FFF", "#4D7EFF", "#829AFF", "#2946CC", "#7D8FD9",
  "#FF33A6", "#FF5CBD", "#FF8AD3", "#CC2885", "#991E64", "#FFFFFF", "#000000", "#FFB3D9", "#FF0099", "#FF007A",
  "#D96EAD", "#B05B90", "#8C2E70", "#FF3CB0", "#FF82C6", "#FF70B8", "#FF4DA6", "#FF82C6", "#CC2885", "#D97DAF",
  "#A633FF", "#B85CFF", "#CB8AFF", "#8528CC", "#641E99", "#FFFFFF", "#000000", "#D9B3FF", "#9900FF", "#A000FF",
  "#B36ED9", "#905BB0", "#6F2E8C", "#AF3CFF", "#C682FF", "#B870FF", "#A64DFF", "#C682FF", "#8528CC", "#B37DD9"
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
 // Create WhatsApp Button Dynamically
  const whatsappButton = document.createElement('a');
  whatsappButton.href = 'https://wa.me/918395913829'; // Replace with your number
  whatsappButton.target = '_blank';
  whatsappButton.id = 'whatsapp-button';
  whatsappButton.title = 'Chat on WhatsApp';

  // Create and add icon
  const icon = document.createElement('img');
  icon.src = 'https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png';
  icon.alt = 'WhatsApp';

  whatsappButton.appendChild(icon);
  document.body.appendChild(whatsappButton);

  const callButton = document.createElement('a');
  callButton.href = 'tel:+918395913829'; // Replace with your number
  callButton.id = 'call-button';
  callButton.title = 'Call Now';

  // Icon
  const callIcon = document.createElement('img');
  callIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/phone.png';
  callIcon.alt = 'Call';

  callButton.appendChild(callIcon);
  document.body.appendChild(callButton);

   // Create Message Button
  const msgBtn = document.createElement('button');
  msgBtn.id = 'message-button';
  msgBtn.title = 'Message Us';

  const msgIcon = document.createElement('img');
  msgIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sms.png';
  msgIcon.alt = 'Message';
  msgBtn.appendChild(msgIcon);
  document.body.appendChild(msgBtn);

  // Create Popup
  const popupOverlay = document.createElement('div');
  popupOverlay.id = 'popupForm';
  popupOverlay.innerHTML = `
    <div class="popup-content">
      <span class="popup-close" onclick="closePopup()">×</span>
      <h2>Send Message</h2>
      <form onsubmit="event.preventDefault(); closePopup(); alert('Message Sent!');">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  `;
  document.body.appendChild(popupOverlay);

  // Open Popup
  msgBtn.onclick = () => {
    document.getElementById('popupForm').style.display = 'flex';
  }

  // Close function
  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }
