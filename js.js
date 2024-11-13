const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
    scrollToTopBtn.style.opacity = '1';
  } else {
    scrollToTopBtn.style.opacity = '0';
    setTimeout(() => {
      scrollToTopBtn.style.display = 'none';
    }, 300);
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const cards = document.querySelectorAll('.card');
const revealCards = () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 50) {
      card.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealCards);
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (phone && email && message) {
    alert('Thank you for reaching out! We will get back to you shortly.');
    contactForm.reset();
  } else {
    alert('Please fill out all fields.');
  }
});