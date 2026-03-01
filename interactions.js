// Define the function at the module level
function updateThemeIcon(isDarkMode) {
    const themeIcon = document.getElementById('themeIcon');
    if (isDarkMode) {
        // In dark mode, show moon icon
        themeIcon.classList.remove('fa-lightbulb');
        themeIcon.classList.add('fa-moon');
    } else {
        // In light mode, show sun icon
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-lightbulb');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Update the icon based on the current theme
        updateThemeIcon(isDarkMode);
        
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Force consistent zoom level
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        // Only apply to Chrome
        document.documentElement.style.transform = "scale(1)";
        document.documentElement.style.transformOrigin = "top left";
    }
});

// If using modules, export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateThemeIcon };
}
// =====================
// Scroll to Top Button
// =====================
(function () {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();