/*Scrool Reveal Project Cards*/
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

hiddenElements.forEach(el => {
  observer.observe(el);
});

/*Manual Parallax Effect */
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollOffset = window.scrollY * 0.5; 
  heroSection.style.backgroundPositionY = `-${scrollOffset}px`;
});

/*Magic Button Effect */

const magneticBtn = document.querySelector('.magnetic-btn');

if (magneticBtn) {
  const magnetStrength = 50;

  magneticBtn.addEventListener('mousemove', (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    const centerX = rect.left + (rect.width / 2);
    const centerY = rect.top + (rect.height / 2);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    magneticBtn.style.transform = `translate(${deltaX / magnetStrength}px, ${deltaY / magnetStrength}px)`;
  });

  magneticBtn.addEventListener('mouseleave', () => {
    magneticBtn.style.transform = 'translate(0, 0)';
  });
}