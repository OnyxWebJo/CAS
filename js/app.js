/**
 * CAS Jordan - Interactive Engine & Bilingual Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STATE & CONSTANTS
  let currentLang = localStorage.getItem('cas_lang') || 'en';
  const video = document.getElementById('heroVideo');
  const progressBar = document.getElementById('timelineProgress');
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const scenes = document.querySelectorAll('.hero-scene');
  const header = document.getElementById('headerMain');
  
  // Scene Timecodes (seconds)
  const SCENE_TIMINGS = [
    { id: 1, start: 0, end: 6 },
    { id: 2, start: 6, end: 12 },
    { id: 3, start: 12, end: 18 },
    { id: 4, start: 18, end: 25 },
    { id: 5, start: 25, end: 31 },
    { id: 6, start: 31, end: 46 }
  ];

  let currentActiveScene = 1;

  // 2. LANGUAGE ENGINE
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cas_lang', lang);
    const html = document.documentElement;
    const t = translations[lang];

    if (!t) return;

    // Set attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update document title & meta description
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n').split('.');
      let val = t;
      for (const k of keyPath) {
        if (val && val[k] !== undefined) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        el.textContent = val;
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const keyPath = el.getAttribute('data-i18n-placeholder').split('.');
      let val = t;
      for (const k of keyPath) {
        if (val && val[k] !== undefined) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        el.setAttribute('placeholder', val);
      }
    });

    // Language button text update
    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) {
      langBtnText.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    // Update timeline step labels
    timelineSteps.forEach((step, idx) => {
      const label = step.querySelector('.step-name');
      if (label && t.hero.timelineLabels[idx]) {
        label.textContent = t.hero.timelineLabels[idx];
      }
    });

    // Render Solutions Features dynamically
    renderSolutions(lang);

    // Render FAQ items dynamically
    renderFAQ(lang);
  }

  // Language Switch Button Listener
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  }

  // 3. RENDER SOLUTIONS DYNAMICALLY
  function renderSolutions(lang) {
    const container = document.getElementById('solutionsContainer');
    if (!container) return;
    const items = translations[lang].solutions.items;

    container.innerHTML = items.map((item, idx) => `
      <div class="glass-card solution-card ${idx === 0 ? 'solution-card-featured' : ''}">
        <div class="solution-top">
          <span class="solution-badge">${item.tag}</span>
          <h3 class="solution-title">${item.title}</h3>
          <p class="solution-desc">${item.desc}</p>
          <ul class="solution-features">
            ${item.features.map(f => `
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div>
          <button class="solution-link open-consultation-btn" data-service="${item.title}">
            <span>${item.cta}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    attachConsultationTriggers();
  }

  // 4. RENDER FAQ DYNAMICALLY
  function renderFAQ(lang) {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    const items = translations[lang].faq.items;

    container.innerHTML = items.map((item, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button class="faq-question" aria-expanded="${idx === 0}">
          <span>${item.q}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `).join('');

    // Attach Accordion Toggle
    const faqElements = container.querySelectorAll('.faq-item');
    faqElements.forEach(item => {
      const btn = item.querySelector('.faq-question');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqElements.forEach(el => el.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    });
  }

  // 5. VIDEO & TIMELINE CONTROLLER
  function updateScene(sceneNum) {
    if (currentActiveScene === sceneNum) return;
    currentActiveScene = sceneNum;

    // Update scene visibility
    scenes.forEach(scene => {
      const sId = parseInt(scene.getAttribute('data-scene'), 10);
      if (sId === sceneNum) {
        scene.classList.add('active');
      } else {
        scene.classList.remove('active');
      }
    });

    // Update active step indicator
    timelineSteps.forEach(step => {
      const sId = parseInt(step.getAttribute('data-step'), 10);
      if (sId === sceneNum) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  if (video) {
    // Attempt Autoplay
    video.play().catch(e => {
      console.log('Video autoplay prevented, waiting for user click.', e);
    });

    // Sync Timecode
    video.addEventListener('timeupdate', () => {
      const curTime = video.currentTime;
      const duration = video.duration || 46;
      const progressPercent = (curTime / duration) * 100;

      if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
      }

      // Identify active scene
      for (const t of SCENE_TIMINGS) {
        if (curTime >= t.start && curTime < t.end) {
          updateScene(t.id);
          break;
        }
      }
    });

    // When loop ends, reset to beginning seamlessly
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });

    // Interactive Step Buttons
    timelineSteps.forEach(step => {
      step.addEventListener('click', () => {
        const stepNum = parseInt(step.getAttribute('data-step'), 10);
        const timing = SCENE_TIMINGS.find(s => s.id === stepNum);
        if (timing && video) {
          video.currentTime = timing.start + 0.1;
          updateScene(stepNum);
          video.play();
        }
      });
    });

    // Interactive Scrubber
    const timelineTrack = document.getElementById('timelineTrack');
    if (timelineTrack) {
      timelineTrack.addEventListener('click', (e) => {
        const rect = timelineTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        const ratio = isRtl ? (1 - clickX / width) : (clickX / width);
        video.currentTime = ratio * (video.duration || 46);
      });
    }

    // Play / Pause Toggle
    const playToggleBtn = document.getElementById('videoPlayToggle');
    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playToggleBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
        } else {
          video.pause();
          playToggleBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
        }
      });
    }

    // Mute / Unmute Toggle
    const audioToggleBtn = document.getElementById('videoAudioToggle');
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
          audioToggleBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
        } else {
          audioToggleBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
        }
      });
    }
  }

  // 6. STICKY NAVBAR SCROLL BEHAVIOR
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 7. SECTOR SWITCHER (Residential / Commercial)
  const tabResidential = document.getElementById('tabResidential');
  const tabCommercial = document.getElementById('tabCommercial');
  const paneResidential = document.getElementById('paneResidential');
  const paneCommercial = document.getElementById('paneCommercial');

  if (tabResidential && tabCommercial) {
    tabResidential.addEventListener('click', () => {
      tabResidential.classList.add('active');
      tabCommercial.classList.remove('active');
      paneResidential.classList.add('active');
      paneCommercial.classList.remove('active');
    });

    tabCommercial.addEventListener('click', () => {
      tabCommercial.classList.add('active');
      tabResidential.classList.remove('active');
      paneCommercial.classList.add('active');
      paneResidential.classList.remove('active');
    });
  }

  // 8. ANIMATED COUNTERS ON SCROLL
  const statsSection = document.getElementById('statsSection');
  let animatedStats = false;

  function animateNumbers() {
    const statElements = document.querySelectorAll('.stat-count');
    statElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      if (isNaN(target)) return;
      const duration = 1800;
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeOutQuad * target);
        el.textContent = currentVal.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          el.textContent = target.toLocaleString();
        }
      }
      requestAnimationFrame(updateNumber);
    });
  }

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          animateNumbers();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  // 9. CONSULTATION MODAL
  const modal = document.getElementById('consultationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalForm = document.getElementById('consultationForm');
  const modalSuccess = document.getElementById('modalSuccess');

  function openModal(servicePreselect = '') {
    if (modal) {
      modal.classList.add('open');
      if (modalSuccess) modalSuccess.style.display = 'none';
      if (modalForm) modalForm.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function attachConsultationTriggers() {
    document.querySelectorAll('.open-consultation-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const service = btn.getAttribute('data-service') || '';
        openModal(service);
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.style.display = 'none';
      if (modalSuccess) modalSuccess.style.display = 'block';
      setTimeout(() => {
        closeModal();
      }, 3500);
    });
  }

  // Initialize
  setLanguage(currentLang);
  attachConsultationTriggers();
});
