// Freelancer Marketplace Platform - Main JavaScript

// Theme Toggle Functionality
(function() {
    // Apply saved theme or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
    
    // Theme toggle handler
    function initThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;
        
        // Update icon based on current theme
        function updateIcon() {
            const isDark = document.documentElement.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        
        // Initial icon update
        updateIcon();
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function() {
            const isDark = document.documentElement.classList.contains('dark-mode');
            
            if (isDark) {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
            
            updateIcon();
        });
    }
    
    // Initialize theme toggle when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
})();

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    function isMenuOpen() {
        return navLinks && navLinks.classList.contains('active');
    }
    
    function openMenu() {
        if (navLinks) {
            navLinks.classList.add('active');
        }
        if (navActions) {
            navActions.classList.add('active');
        }
    }
    
    function closeMenu() {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (navActions) {
            navActions.classList.remove('active');
        }
    }
    
    function toggleMenu() {
        if (isMenuOpen()) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Toggle menu on hamburger click
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close menu when clicking on navigation links (except dropdown toggles)
    if (navLinks) {
        navLinks.addEventListener('click', function(e) {
            const clickedLink = e.target.closest('a');
            // Don't close if clicking dropdown toggle
            if (clickedLink && clickedLink.closest('.nav-dropdown') && !clickedLink.closest('.dropdown-menu')) {
                return;
            }
            // Close for all other links
            if (clickedLink) {
                closeMenu();
            }
        });
    }
    
    // Close menu when clicking action buttons
    if (navActions) {
        navActions.addEventListener('click', function(e) {
            const target = e.target.closest('a, button');
            if (target && (target.classList.contains('btn') || target.classList.contains('theme-toggle'))) {
                setTimeout(closeMenu, 150);
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!isMenuOpen()) return;
        
        // Check if click is outside the menu
        const isClickInsideMenu = navLinks && navLinks.contains(e.target);
        const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(e.target);
        const isClickInActions = navActions && navActions.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && !isClickInActions) {
            closeMenu();
        }
    });
    
    // Close menu on window resize if it becomes desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 820) {
            closeMenu();
        }
    });

    // Navigation Dropdown Toggle
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    const dropdownTimeouts = new Map(); // Store timeouts for each dropdown
    
    navDropdowns.forEach(dropdown => {
        // Get the first direct child anchor tag (more compatible approach)
        const dropdownLink = dropdown.children[0] && dropdown.children[0].tagName === 'A' 
            ? dropdown.children[0] 
            : dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownLink && dropdownMenu) {
            // Clear timeout function for this specific dropdown
            const clearDropdownTimeout = () => {
                if (dropdownTimeouts.has(dropdown)) {
                    clearTimeout(dropdownTimeouts.get(dropdown));
                    dropdownTimeouts.delete(dropdown);
                }
            };
            
            // Click handler for desktop and mobile
            dropdownLink.addEventListener('click', function(e) {
                // Only prevent default if dropdown menu exists
                if (dropdownMenu) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                
                clearDropdownTimeout();
                
                // Close other dropdowns
                navDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                        // Clear other dropdowns' timeouts
                        if (dropdownTimeouts.has(otherDropdown)) {
                            clearTimeout(dropdownTimeouts.get(otherDropdown));
                            dropdownTimeouts.delete(otherDropdown);
                        }
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });
            
            // Prevent dropdown from closing when clicking inside
            dropdownMenu.addEventListener('click', function(e) {
                clearDropdownTimeout();
                e.stopPropagation();
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            // Clear all timeouts and close all dropdowns immediately when clicking outside
            dropdownTimeouts.forEach((timeoutId) => {
                clearTimeout(timeoutId);
            });
            dropdownTimeouts.clear();
            
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Close dropdowns on window resize (mobile menu toggle)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 820) {
            // Clear all timeouts on resize
            dropdownTimeouts.forEach((timeoutId) => {
                clearTimeout(timeoutId);
            });
            dropdownTimeouts.clear();
            
            // Reset dropdowns on desktop
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Accordion Functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', function() {
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // FAQ Section Toggle
    const faqSectionToggle = document.querySelector('.faq-section-toggle');
    const faqSectionContainer = document.querySelector('.faq-section-container');
    if (faqSectionToggle && faqSectionContainer) {
        faqSectionToggle.addEventListener('click', function() {
            faqSectionContainer.classList.toggle('collapsed');
        });
    }

    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Rating Stars
    const ratingInputs = document.querySelectorAll('.rating-input');
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            const value = this.value;
            const stars = this.closest('.rating-container').querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index < value) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        });
    });

    // Image Lazy Loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Search Functionality
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.card, .profile-card, .category-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const items = document.querySelectorAll('.filter-item');
            
            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabContainer = this.closest('.tabs');
            const tabName = this.dataset.tab;
            
            tabContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            tabContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            tabContainer.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
        });
    });

    // Modal Functionality
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        });

        observer.observe(counter);
    });
});

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '10000';
    notification.style.minWidth = '300px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

