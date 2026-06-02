// ============================================================================
// MELONE GROVE - JavaScript Functionality
// Mobile navigation, form handling, and cookie banner management
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCookieBanner();
    initializeContactForm();
    initializeSmoothScroll();
});

// ============================================================================
// NAVIGATION - Hamburger Menu
// ============================================================================

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.navbar');
        if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });
}

// ============================================================================
// COOKIE BANNER
// ============================================================================

function initializeCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');
    const cookieSettings = document.getElementById('cookieSettings');
    const cookieSettingsFooter = document.getElementById('cookieSettingsFooter');

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('meloneGrove_cookieChoice');

    if (!cookieChoice) {
        // Show banner if no choice has been made
        cookieBanner.classList.add('show');
    }

    // Accept all cookies
    if (cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            localStorage.setItem('meloneGrove_cookieChoice', 'accepted');
            cookieBanner.classList.remove('show');
            // In a real app, you would initialize analytics here
            console.log('User accepted cookies');
        });
    }

    // Reject non-essential cookies
    if (cookieReject) {
        cookieReject.addEventListener('click', function() {
            localStorage.setItem('meloneGrove_cookieChoice', 'rejected');
            cookieBanner.classList.remove('show');
            console.log('User rejected cookies');
        });
    }

    // Show cookie settings (modal/popup simulation)
    const showCookieSettings = function() {
        alert(
            languageManager.getText('cookie_title') + '\n\n' +
            languageManager.getText('cookie_necessary') + '\n\n' +
            languageManager.getText('cookie_analytics') + '\n\n' +
            languageManager.getText('cookie_marketing') + '\n\n' +
            languageManager.getText('cookie_note')
        );
    };

    if (cookieSettings) {
        cookieSettings.addEventListener('click', function(e) {
            e.preventDefault();
            showCookieSettings();
        });
    }

    if (cookieSettingsFooter) {
        cookieSettingsFooter.addEventListener('click', function(e) {
            e.preventDefault();
            showCookieSettings();
        });
    }
}

// ============================================================================
// CONTACT FORM
// ============================================================================

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const gdprCheckbox = document.getElementById('gdpr').checked;
        const formMessage = document.getElementById('formMessage');

        // Validate inputs
        if (!name || !email || !message) {
            showFormMessage(languageManager.getText('form_error_empty'), 'error', formMessage);
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage(languageManager.getText('form_error_email'), 'error', formMessage);
            return;
        }

        if (!gdprCheckbox) {
            showFormMessage(languageManager.getText('form_error_gdpr'), 'error', formMessage);
            return;
        }

        // In a real application, you would send this data to a server here
        // For this prototype, we just show a success message

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = languageManager.getText('form_sending');

        // Simulate processing delay
        setTimeout(function() {
            // Log the form data (in a real app, this would be sent to the server)
            console.log('Form data:', {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });

            // Show success message
            showFormMessage(
                languageManager.getText('form_success'),
                'success',
                formMessage
            );

            // Reset form
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = originalText;

            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.classList.remove('success');
            }, 5000);
        }, 1000);
    });
}

// ============================================================================
// SMOOTH SCROLL (enhancement for anchor links)
// ============================================================================

function initializeSmoothScroll() {
    // Modern browsers support scroll-behavior: smooth in CSS
    // This function provides additional enhancements if needed
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                // The actual scrolling is handled by CSS scroll-behavior: smooth
                // This just ensures the browser handles it correctly
            }
        });
    });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message (success or error)
function showFormMessage(message, type, element) {
    element.textContent = message;
    element.classList.remove('success', 'error');
    element.classList.add(type);
}

// ============================================================================
// SCROLL TO TOP BUTTON (optional enhancement)
// ============================================================================

function initializeScrollToTop() {
    // Create and inject scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scrollToTop';
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        z-index: 50;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollButton);

    // Show button when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment the line below to enable scroll-to-top button
// initializeScrollToTop();

// ============================================================================
// LOGGING / DEBUGGING
// ============================================================================

// Log initialization status
console.log('Melone Grove - Website initialized');
console.log('Cookie choice stored:', localStorage.getItem('meloneGrove_cookieChoice'));
