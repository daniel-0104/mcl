// href clicked active link start 
document.addEventListener('DOMContentLoaded', () => {
    const currentHTMLPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
  
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentHTMLPage === linkPath) {
        link.classList.add('active');
      }
    });
  });
// href clicked active link end