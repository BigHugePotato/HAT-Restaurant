document.addEventListener("DOMContentLoaded", function () {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuLink = document.querySelector('.nav-links a[href="#menu"]');
  const aboutLink = document.querySelector('.nav-links a[href="#team"]');
  const reservationsLink = document.querySelector(
    '.nav-links a[href="#reservations"]'
  );

  menuLink.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("menu");
  });

  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("ourTeamSection");
  });

  reservationsLink.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection("bookATable");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.querySelector('.topnav a[href="#logo"]');

  logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
