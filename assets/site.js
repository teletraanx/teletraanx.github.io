const externalLinks = document.querySelectorAll("a[data-external]");
const year = document.getElementById("year");
const tocLinks = document.querySelectorAll(".toc a");
const sections = document.querySelectorAll(".project-section");

for (const link of externalLinks) {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
}

if (year) {
  year.textContent = new Date().getFullYear();
}

for (const link of tocLinks) {
  link.addEventListener("click", () => {
    tocLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      const activeLink = document.querySelector(`.toc a[href="#${entry.target.id}"]`);

      tocLinks.forEach((link) => link.classList.remove("active"));

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

for (const section of sections) {
  observer.observe(section);
}