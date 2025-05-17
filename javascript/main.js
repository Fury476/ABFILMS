// Modern Engineering Institution Website - Advanced JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Preloader
  initPreloader();
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Initialize animations
  initAnimations();
  
  // Initialize smooth scrolling
  initSmoothScroll();
  
  // Initialize Tab System for Updates
  initTabs();
  
  // Mobile menu toggle
  initMobileMenu();
  
  // Add parallax effects
  initParallax();
  
  // Initialize counters 
  initCounters();
  
  // Initialize scroll reveal
  initScrollReveal();
  
  // Dark mode toggle
  initDarkMode();
  
  // Create particles
  createParticles();
  
  // Add header scroll effect
  initHeaderScroll();
  
  // 3D Card Effect
  init3DCardEffect();
  
  // Initialize pricing toggle
  initPricingToggle();
});

// Preloader
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  const progressBar = document.querySelector('.preloader-progress-bar');
  
  if (preloader && progressBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.classList.add('loaded');
          
          // Start entrance animations
          startEntranceAnimations();
        }, 500);
      }
      
      progressBar.style.width = `${progress}%`;
    }, 200);
  }
}

// Start entrance animations after preloader
function startEntranceAnimations() {
  const heroElements = document.querySelectorAll('.hero-badge, .hero-text h1, .hero-text p, .hero-buttons, .hero-image');
  
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 200 * index);
  });
}

// Custom cursor
function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, .feature-card, .program-card, .life-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-expanded');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-expanded');
    });
  });
}

// Scroll reveal animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

// Create particle effect for hero
function createParticles() {
  const heroParticles = document.querySelector('.hero-particles');
  if (!heroParticles) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 15 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.1;
    const animDuration = Math.random() * 20 + 10;
    const animDelay = Math.random() * 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = opacity;
    particle.style.animation = `float ${animDuration}s ease-in-out infinite`;
    particle.style.animationDelay = `${animDelay}s`;
    
    heroParticles.appendChild(particle);
  }
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// 3D Card Effect for program cards
function init3DCardEffect() {
  const cards = document.querySelectorAll('.program-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 20;
      const rotateX = (centerY - y) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.transition = 'all 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.1s ease';
    });
  });
}
// Parallax Effect
const layers = document.querySelectorAll('.parallax-layer');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  layers.forEach((layer, index) => {
    const speed = (index + 1) * 10;
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Feature Card Animations
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('reveal');
      }, index * 200);
    }
  });
}, { threshold: 0.1 });
featureCards.forEach(card => observer.observe(card));

// Counter Animations
function animateCount(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 20);
}
const counters = document.querySelectorAll('.count');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCount(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(counter => {
  counter.setAttribute('data-target', counter.textContent);
  counter.textContent = '0';
  counterObserver.observe(counter);
});
// Dark mode toggle
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const icon = darkModeToggle ? darkModeToggle.querySelector('i') : null;
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Check for saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  
  // Apply dark mode based on preference or saved setting
  if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
    if (icon) icon.className = 'fas fa-sun';
  }
  
  // Toggle dark mode on click
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      // Save preference
      localStorage.setItem('darkMode', isDarkMode);
      
      // Update icon
      if (icon) {
        icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
      }
    });
  }
}

// Animation initialization
function initAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .overview-card, .life-card, .spotlight-card');
  
  // Add classes for staggered animation
  animatedElements.forEach((element, index) => {
    element.classList.add('reveal', 'reveal-up');
    element.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Add intersection observer for scrolling animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Tab system for campus updates
function initTabs() {
  const tabButtons = document.querySelectorAll('.updates-nav button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => {
          content.style.opacity = '0';
          setTimeout(() => {
            content.style.display = 'none';
          }, 300);
        });
        
        // Show the selected tab content
        const tabId = button.getAttribute('data-tab');
        const selectedTab = document.getElementById(tabId);
        
        setTimeout(() => {
          if (selectedTab) {
            selectedTab.style.display = 'block';
            setTimeout(() => {
              selectedTab.style.opacity = '1';
            }, 50);
          }
        }, 300);
      });
    });
    
    // Set default active tab
    if (tabButtons[0]) {
      tabButtons[0].click();
    }
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('active');
    });
    
    // Close menu on link click
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuToggle.classList.remove('active');
      });
    });
  }
}

// Parallax effect
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || 0.2;
      const direction = element.getAttribute('data-direction') || 'up';
      
      let yPos = 0;
      if (direction === 'up') {
        yPos = -(scrolled * speed);
      } else {
        yPos = scrolled * speed;
      }
      
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
}

// Animated counters
function initCounters() {
  const counterElements = document.querySelectorAll('.number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        let count = 0;
        const duration = 2000;
        const increment = Math.ceil(target / (duration / 30));
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            entry.target.textContent = Math.min(count, target);
            requestAnimationFrame(updateCount);
          } else {
            entry.target.textContent = target;
          }
        };
        
        requestAnimationFrame(updateCount);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterElements.forEach(counter => {
    counter.setAttribute('data-target', counter.textContent);
    counter.textContent = '0';
    observer.observe(counter);
  });
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.classList.add('error');
      if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'This field is required';
        input.parentNode.insertBefore(errorMsg, input.nextSibling);
      }
      isValid = false;
    } else {
      input.classList.remove('error');
      if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
        input.nextElementSibling.remove();
      }
    }
    
    if (input.type === 'email' && input.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add('error');
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
          const errorMsg = document.createElement('span');
          errorMsg.className = 'error-message';
          errorMsg.textContent = 'Please enter a valid email address';
          input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }
        isValid = false;
      }
    }
  });
  
  // Add shake animation for errors
  if (!isValid) {
    form.classList.add('shake');
    setTimeout(() => {
      form.classList.remove('shake');
    }, 500);
  }
  
  return isValid;
}

// Pricing toggle functionality
function initPricingToggle() {
  const billingToggle = document.getElementById('billing-toggle');
  const prices = document.querySelectorAll('.price .amount');
  const periods = document.querySelectorAll('.price .period');
  
  if (billingToggle) {
    billingToggle.addEventListener('change', function() {
      if (this.checked) {
        // Yearly pricing
        prices.forEach(price => {
          const monthlyPrice = parseInt(price.textContent);
          price.textContent = Math.round(monthlyPrice * 9.6); // 20% discount (12 months for the price of 9.6)
        });
        
        periods.forEach(period => {
          period.textContent = '/ Year';
        });
      } else {
        // Monthly pricing
        prices.forEach(price => {
          const yearlyPrice = parseInt(price.textContent);
          price.textContent = Math.round(yearlyPrice / 9.6);
        });
        
        periods.forEach(period => {
          period.textContent = '/ Month';
        });
      }
    });
  }
}