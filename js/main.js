// Select all elements that have the class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');

// Create an Intersection Observer
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
