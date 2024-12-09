document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Thank you for exploring Web Technologies in Trade Finance!');
    });
  }
});
