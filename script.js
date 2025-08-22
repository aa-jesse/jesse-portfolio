async function loadContent() {
  const res = await fetch('content.json');
  const data = await res.json();

  document.getElementById('heroName').textContent = data.hero.name;
  document.getElementById('heroTagline').textContent = data.hero.tagline;
  document.getElementById('heroPhoto').src = data.hero.photo;
  document.getElementById('cvLink').href = data.hero.links.cv;
  document.getElementById('linkedinLink').href = data.hero.links.linkedin;
  document.getElementById('linktreeLink').href = data.hero.links.linktree;
  document.getElementById('linkedinIcon').href = data.hero.links.linkedin;
  document.getElementById('linktreeIcon').href = data.hero.links.linktree;

  document.getElementById('aboutText').textContent = data.about;

  // Projects
  const pg = document.getElementById('projectsGrid');
  data.projects.forEach(p => {
    let el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `<h3>${p.title}</h3><p>${p.summary}</p>`;
    pg.appendChild(el);
  });

  // Skills
  document.getElementById('skillsTools').innerHTML = data.skills.tools.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('skillsMethods').innerHTML = data.skills.methods.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('skillsDomains').innerHTML = data.skills.domains.map(x=>`<li>${x}</li>`).join('');

  // Publications
  document.getElementById('pubList').innerHTML = data.publications.map(p=>`<li><a href="${p.url}" target="_blank">${p.cite}</a></li>`).join('');

  // Certs
  document.getElementById('certList').innerHTML = data.certs.map(c=>`<li><a href="${c.url}" target="_blank">${c.name}</a></li>`).join('');

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', loadContent);
