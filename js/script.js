// Show loader for 2 seconds even if page loads fast
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }, 2000); // 2 seconds
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

document.body.classList.add('light');
