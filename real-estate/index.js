
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const thankYouPopup = document.getElementById('thank-you-popup');
    const closeBtn = document.querySelector('.close-btn');
  
    yesBtn.addEventListener('click', () => {
      window.location.href = '#contact';
    });
  
    noBtn.addEventListener('click', () => {
      thankYouPopup.style.display = 'flex';
    });
  
    
    closeBtn.addEventListener('click', () => {
      thankYouPopup.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === thankYouPopup) {
        thankYouPopup.style.display = 'none';
      }
    });