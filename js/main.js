/**
 * MAIN INTERACTIVITY CONTROLLER
 * Handles project rendering, category filters, image lightboxes,
 * case study modal drawers, media switching (Image vs. Video), and theme toggle.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderStats();
  renderProjects('all');
  renderSkills();
  renderTimeline();
  setupFilterButtons();
  setupModalDismissals();
  setupSmoothScrolling();
});

/* ==========================================================================
   1. PROFILE & HERO SETUP
   ========================================================================== */
function renderProfile() {
  if (typeof portfolioProfile === 'undefined') return;

  // Name & Titles
  const nameEls = document.querySelectorAll('.profile-name');
  nameEls.forEach(el => el.textContent = portfolioProfile.name);

  const titleEls = document.querySelectorAll('.profile-title');
  titleEls.forEach(el => el.textContent = portfolioProfile.title);

  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = portfolioProfile.tagline;

  const statusEl = document.getElementById('hero-status-text');
  if (statusEl) statusEl.textContent = portfolioProfile.status;

  const locationEl = document.getElementById('profile-location');
  if (locationEl) locationEl.textContent = portfolioProfile.location;

  // Resume Link
  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    resumeBtn.href = portfolioProfile.resumeUrl;
    if (portfolioProfile.resumeUrl !== '#resume') {
      resumeBtn.setAttribute('target', '_blank');
    }
  }

  // Social Links
  const linkedinLinks = document.querySelectorAll('.link-linkedin');
  linkedinLinks.forEach(el => el.href = portfolioProfile.linkedin);

  const githubLinks = document.querySelectorAll('.link-github');
  githubLinks.forEach(el => el.href = portfolioProfile.github);

  const tableauLinks = document.querySelectorAll('.link-tableau');
  tableauLinks.forEach(el => el.href = portfolioProfile.tableauPublic);

  const emailLinks = document.querySelectorAll('.link-email');
  emailLinks.forEach(el => el.href = `mailto:${portfolioProfile.email}`);
}

/* ==========================================================================
   2. METRICS & STATS
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('metrics-bar-container');
  if (!container || !portfolioProfile.stats) return;

  const iconMap = {
    chart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
    database: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    currency: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    tools: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  };

  container.innerHTML = portfolioProfile.stats.map(stat => `
    <div class="metric-item">
      <div class="metric-icon-wrap">
        ${iconMap[stat.icon] || iconMap.chart}
      </div>
      <div>
        <div class="metric-val">${stat.value}</div>
        <div class="metric-lbl">${stat.label}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. PROJECT CARDS & MEDIA PREVIEWS
   ========================================================================== */
function renderProjects(filterCategory = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof projectsData === 'undefined') return;

  const filtered = filterCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No projects found in this category.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const hasVideo = p.video || p.loomUrl;
    const mediaBadgeText = hasVideo ? '🎥 Video Walkthrough' : '📷 High-Res View';

    return `
      <article class="project-card" data-id="${p.id}">
        <!-- Media Showcase Top -->
        <div class="project-media-wrapper" onclick="openLightbox('${p.image}', '${escapeHtml(p.title)}')">
          <img 
            src="${p.image}" 
            alt="${escapeHtml(p.title)}" 
            class="project-img-preview" 
            loading="lazy" 
          />
          <div class="project-badge-top">${p.badge || p.categoryLabel}</div>
          <div class="media-type-badge">${mediaBadgeText}</div>

          <div class="media-overlay-hint">
            <span class="zoom-pill-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Click to Zoom Dashboard
            </span>
          </div>
        </div>

        <!-- Project Details Body -->
        <div class="project-body">
          <div class="project-category">${p.categoryLabel}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-headline">${p.headline}</p>

          <!-- KPI Metric Highlights -->
          <div class="project-metrics-grid">
            ${p.metrics.map(m => `
              <div class="project-metric-box">
                <div class="metric-box-val">${m.val}</div>
                <div class="metric-box-lbl">${m.label}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tools Used -->
          <div class="project-tools">
            ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
          </div>

          <!-- Action Footer -->
          <div class="project-footer">
            <button class="btn btn-primary btn-sm" onclick="openCaseStudy('${p.id}')">
              View Case Study &amp; Impact
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>

            <div class="card-links-group">
              ${p.links.pdfReport ? `
                <a href="${p.links.pdfReport}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="View PDF Analytical Report">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </a>
              ` : ''}

              ${p.links.pbixDownload ? `
                <a href="${p.links.pbixDownload}" download class="icon-action-btn" title="Download Power BI (.pbix) File">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
              ` : ''}

              ${p.links.github ? `
                <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="View Code on GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              ` : ''}

              ${p.links.liveDemo ? `
                <a href="${p.links.liveDemo}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="Open Live Dashboard">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4. CATEGORY FILTERS
   ========================================================================== */
function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* ==========================================================================
   5. SKILLS MATRIX
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-matrix-container');
  if (!container || !portfolioProfile.skills) return;

  const categories = [
    { title: "BI & Data Visualization", icon: "📊", items: portfolioProfile.skills.biAndViz },
    { title: "SQL & Relational Databases", icon: "🗄️", items: portfolioProfile.skills.databases },
    { title: "Python & Data Science", icon: "🐍", items: portfolioProfile.skills.programming },
    { title: "Spreadsheets & Financial Modeling", icon: "📑", items: portfolioProfile.skills.spreadsheets }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <h4 class="skill-cat-title">${cat.title}</h4>
      </div>
      <div class="skill-pills-list">
        ${cat.items.map(item => `
          <span class="skill-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            ${item}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. EXPERIENCE & CERTIFICATIONS
   ========================================================================== */
function renderTimeline() {
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer && typeof workExperience !== 'undefined') {
    expContainer.innerHTML = workExperience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-period">${exp.period}</div>
        <h4 class="timeline-role">${exp.role}</h4>
        <div class="timeline-company">${exp.company}</div>
        <p class="timeline-desc">${exp.description}</p>
      </div>
    `).join('');
  }

  const certContainer = document.getElementById('certifications-list');
  if (certContainer && typeof certifications !== 'undefined') {
    certContainer.innerHTML = certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        </div>
        <div>
          <h4 class="cert-title">${cert.title}</h4>
          <div class="cert-issuer">${cert.issuer} • ${cert.year}</div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   7. LIGHTBOX MODAL (Image Zoom)
   ========================================================================== */
function openLightbox(imgSrc, title, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');

  if (!modal || !img) return;

  img.src = imgSrc;
  if (titleEl) titleEl.textContent = title || "Dashboard Visual Inspection";
  if (captionEl) captionEl.textContent = caption || "High-resolution view. Press Esc or click anywhere outside to close.";

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   8. CASE STUDY MODAL (Deep-Dive & Video Player)
   ========================================================================== */
let currentActiveProject = null;

function openCaseStudy(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  currentActiveProject = project;

  const modal = document.getElementById('case-study-modal');
  const catEl = document.getElementById('cs-category');
  const titleEl = document.getElementById('cs-title');
  const problemEl = document.getElementById('cs-problem');
  const approachEl = document.getElementById('cs-approach');
  const insightsEl = document.getElementById('cs-insights');
  const recEl = document.getElementById('cs-recommendations');
  const mediaContainer = document.getElementById('cs-media-display');
  const mediaTabs = document.getElementById('cs-media-tabs');
  const githubBtn = document.getElementById('cs-github-link');
  const liveBtn = document.getElementById('cs-live-link');

  // Fill text
  if (catEl) catEl.textContent = project.categoryLabel;
  if (titleEl) titleEl.textContent = project.title;
  if (problemEl) problemEl.innerHTML = project.problem;
  if (approachEl) approachEl.innerHTML = project.approach;

  if (insightsEl) {
    insightsEl.innerHTML = project.insights.map(item => `
      <li class="cs-insight-item">
        <span style="color: var(--accent-emerald); font-weight: bold;">✓</span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (recEl) recEl.innerHTML = project.recommendations;

  // External Links
  const pdfBtn = document.getElementById('cs-pdf-link');
  const pbixBtn = document.getElementById('cs-pbix-link');

  if (pdfBtn) {
    if (project.links.pdfReport) {
      pdfBtn.href = project.links.pdfReport;
      pdfBtn.style.display = 'inline-flex';
    } else {
      pdfBtn.style.display = 'none';
    }
  }

  if (pbixBtn) {
    if (project.links.pbixDownload) {
      pbixBtn.href = project.links.pbixDownload;
      pbixBtn.style.display = 'inline-flex';
    } else {
      pbixBtn.style.display = 'none';
    }
  }

  if (githubBtn) {
    githubBtn.href = project.links.github || '#';
    githubBtn.style.display = project.links.github ? 'inline-flex' : 'none';
  }
  if (liveBtn) {
    liveBtn.href = project.links.liveDemo || '#';
    liveBtn.style.display = project.links.liveDemo ? 'inline-flex' : 'none';
  }

  // Setup Media Tabs (Screenshot vs. Video Walkthrough)
  renderCaseStudyMedia('image');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderCaseStudyMedia(type) {
  if (!currentActiveProject) return;
  const project = currentActiveProject;
  const mediaContainer = document.getElementById('cs-media-display');
  const tabImageBtn = document.getElementById('cs-tab-image');
  const tabVideoBtn = document.getElementById('cs-tab-video');

  if (type === 'image') {
    tabImageBtn?.classList.add('active');
    tabVideoBtn?.classList.remove('active');

    mediaContainer.innerHTML = `
      <img 
        src="${project.image}" 
        alt="${escapeHtml(project.title)}" 
        class="cs-img-display" 
        onclick="openLightbox('${project.image}', '${escapeHtml(project.title)}')"
        title="Click to zoom image"
      />
      <div style="text-align: center; padding: 8px; font-size: 0.8rem; color: var(--text-dim); background: var(--bg-primary);">
        🔍 Click image above to enlarge in high resolution
      </div>
    `;
  } else if (type === 'video') {
    tabVideoBtn?.classList.add('active');
    tabImageBtn?.classList.remove('active');

    if (project.loomUrl) {
      mediaContainer.innerHTML = `
        <div style="position: relative; padding-bottom: 56.25%; height: 0;">
          <iframe 
            src="${project.loomUrl}" 
            frameborder="0" 
            webkitallowfullscreen mozallowfullscreen allowfullscreen 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
          </iframe>
        </div>
      `;
    } else if (project.video) {
      mediaContainer.innerHTML = `
        <video controls autoplay muted playsinline class="cs-video-frame">
          <source src="${project.video}" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      `;
    } else {
      // Instructional prompt if no video is uploaded yet
      mediaContainer.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; background: var(--bg-card); border-radius: var(--radius-md);">
          <div style="font-size: 2.2rem; margin-bottom: 12px;">🎥</div>
          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--text-main);">Add Your Video Walkthrough Here!</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 16px;">
            Record a 60-second Loom or ScreenToGif clip showing your filters, slicers, and key metrics.
          </p>
          <code style="background: var(--bg-primary); padding: 6px 12px; border-radius: 6px; font-size: 0.82rem; color: var(--accent-cyan); display: inline-block;">
            js/projects-data.js ➔ loomUrl: "https://www.loom.com/embed/..."
          </code>
        </div>
      `;
    }
  }
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Pause any active videos or embeds by clearing media
    const mediaContainer = document.getElementById('cs-media-display');
    if (mediaContainer) mediaContainer.innerHTML = '';
  }
}

/* ==========================================================================
   9. MODAL DISMISSALS & KEYBOARD LISTENERS
   ========================================================================== */
function setupModalDismissals() {
  // ESC key closes both modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeCaseStudy();
    }
  });

  // Background clicks close modals
  const lbModal = document.getElementById('lightbox-modal');
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal || e.target.classList.contains('lightbox-body')) {
        closeLightbox();
      }
    });
  }

  const csModal = document.getElementById('case-study-modal');
  if (csModal) {
    csModal.addEventListener('click', (e) => {
      if (e.target === csModal) {
        closeCaseStudy();
      }
    });
  }
}

/* ==========================================================================
   10. ONE-CLICK EMAIL COPY & TOAST
   ========================================================================== */
function copyEmailToClipboard() {
  const email = (typeof portfolioProfile !== 'undefined' && portfolioProfile.email) 
    ? portfolioProfile.email 
    : "your.email@example.com";

  navigator.clipboard.writeText(email).then(() => {
    showToast(`✓ Copied "${email}" to clipboard!`);
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-message';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==========================================================================
   11. THEME TOGGLE (Dark / Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('data-portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('data-portfolio-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` 
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

/* ==========================================================================
   12. SMOOTH SCROLLING FOR NAV
   ========================================================================== */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#resume') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

