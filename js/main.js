// Mobile nav toggle
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Render project cards from the `projects` array (see js/projects-data.js)
const projectList = document.querySelector("#project-list");

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const tagsHtml = project.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tags">${tagsHtml}</div>
    <div class="project-links">
      <a href="${project.demoUrl}" target="_blank" rel="noopener">Demo</a>
      <a href="${project.repoUrl}" target="_blank" rel="noopener">Repo</a>
    </div>
  `;

  return card;
}

projects.forEach((project) => {
  projectList.appendChild(createProjectCard(project));
});
