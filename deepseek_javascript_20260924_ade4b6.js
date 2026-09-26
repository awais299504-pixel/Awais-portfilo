/* ============================================================
   AWAIS AHMAD — AI PORTFOLIO
   Vanilla JavaScript interactions
   ============================================================ */

(function () {
  'use strict';

  /* ---------- DOM References ---------- */
  const header = document.getElementById('siteHeader');
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealElements = document.querySelectorAll('.reveal');
  const backToTop = document.getElementById('backToTop');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const contactForm = document.getElementById('contactForm');
  const heroParticles = document.getElementById('heroParticles');

  /* ---------- Project Data for Modal ---------- */
  const projectData = {
    1: {
      title: 'AI Customer Support Agent',
      description: 'An AI-powered customer support automation workflow designed to assist with customer query handling and information retrieval.',
      technologies: ['n8n', 'Airtable', 'AI APIs'],
      features: [
        'AI-powered customer support workflow',
        'Airtable-based customer/business data',
        'Automated query handling',
        'Information retrieval',
        'API integration',
        'AI agent concepts',
        'Workflow automation'
      ],
      note: 'This project explores practical AI agent concepts and workflow automation.'
    },
    2: {
      title: 'Smart Academic Management System',
      description: 'An AI-assisted academic management solution designed around structured academic data and workflow automation.',
      technologies: ['n8n', 'AI Agent', 'Airtable'],
      features: [
        'Student records',
        'Attendance',
        'Marks',
        'Timetable',
        'Teachers',
        'Fees',
        'AI agent integration concepts',
        'Workflow automation'
      ],
      note: 'This project focuses on applying AI agent concepts to academic administration.'
    },
    3: {
      title: 'HB Advertisers Business Management System',
      description: 'A business management application developed for HB Advertisers.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Airtable'],
      features: [
        'Customer record management',
        'Business data management',
        'Invoice generation',
        'Quotation generation',
        'Payment management',
        'Profit management',
        'Customer records',
        'Airtable database integration'
      ],
      note: 'A practical business management solution built with web technologies and Airtable.'
    },
    4: {
      title: 'HB Advertisers Full-Stack Business Website',
      description: 'A business website with frontend and backend components focused on business information, services, and database-backed functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Airtable'],
      features: [
        'Responsive web structure',
        'Business information',
        'Service presentation',
        'Backend functionality',
        'Database integration'
      ],
      note: 'A full-stack website project demonstrating frontend and backend integration.'
    },
    5: {
      title: 'Smart Canteen Management System',
      description: 'A C++ academic project focused on structured canteen management and transaction handling.',
      technologies: ['C++'],
      features: [
        'Customer information',
        'Multi-item ordering',
        'Pricing calculations',
        'GST calculations',
        'Discount calculations',
        'Payment handling',
        'Receipt generation',
        'Structured programming'
      ],
      note: 'An academic C++ project focused on structured programming and transaction handling.'
    }
  };

  /* ---------- Sticky Navigation ---------- */
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (window.scrollY > 600) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
    }

    updateActiveNav();
  }

  /* ---------- Active Navigation Indicator ---------- */
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  /* ---------- Mobile Hamburger Menu ---------- */
  function toggleMobileMenu() {
    const isOpen = mainNav.classList.contains('open');
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  }

  function closeMobileMenu() {
    mainNav.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  /* ---------- Smooth Scrolling ---------- */
  function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const headerOffset = header.offsetHeight || 72;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  /* ---------- Scroll Reveal (Intersection Observer) ---------- */
  function initRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      revealElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Hero Particles (subtle) ---------- */
  function createHeroParticles() {
    if (!heroParticles) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');

      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 12;
      const duration = 8 + Math.random() * 8;
      const size = 2 + Math.random() * 2;

      particle.style.left = left + '%';
      particle.style.top = top + '%';
      particle.style.animationDelay = delay + 's';
      particle.style.animationDuration = duration + 's';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      heroParticles.appendChild(particle);
    }
  }

  /* ---------- Project Modal ---------- */
  function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;

    let html = '<p>' + project.description + '</p>';
    html += '<div class="modal-tech">';
    project.technologies.forEach(function (tech) {
      html += '<span class="tech-tag">' + tech + '</span>';
    });
    html += '</div>';
    html += '<ul class="modal-features">';
    project.features.forEach(function (feature) {
      html += '<li>' + feature + '</li>';
    });
    html += '</ul>';
    html += '<p class="modal-note">' + project.note + '</p>';

    modalBody.innerHTML = html;
    modalOverlay.hidden = false;
    // Force reflow before adding open class for transition
    void modalOverlay.offsetWidth;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () {
      modalOverlay.hidden = true;
    }, 300);
  }

  /* ---------- Contact Form (mailto fallback) ---------- */
  function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n\n' +
      'Message:\n' + message
    );

    window.location.href = 'mailto:awaistech.ai16@gmail.com?subject=' + subject + '&body=' + body;
  }

  /* ---------- Event Listeners ---------- */
  function init() {
    // Scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hamburger
    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Nav links: smooth scroll + close mobile menu
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        closeMobileMenu();
        smoothScrollTo(targetId);
        // Update URL hash without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      });
    });

    // Back to top
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Project details buttons
    document.querySelectorAll('.project-details-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
      });
    });

    // Modal close
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }

    // Escape key closes modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });

    // Contact form
    if (contactForm) {
      contactForm.addEventListener('submit', handleContactForm);
    }

    // Close mobile menu on resize (if open and screen becomes large)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    // Initialize
    initRevealObserver();
    createHeroParticles();
    handleScroll();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();