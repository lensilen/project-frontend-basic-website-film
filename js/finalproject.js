
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
  sidebar.classList.toggle('active');
};

document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = href;
      }
    });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

window.onload = function () {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
};