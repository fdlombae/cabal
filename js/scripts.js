/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

/**
 * Get the user's preferred language from localStorage or browser settings
 * @returns {string} Language code ('nl' or 'fr')
 */
function getPreferredLanguage() {
    var supportedLanguages = ['nl', 'fr'];

    // First check localStorage for saved preference
    var savedLanguage = localStorage.getItem('cabal-language');
    if (savedLanguage && supportedLanguages.indexOf(savedLanguage) !== -1) {
        return savedLanguage;
    }

    // Fall back to browser language
    var browserLanguage = navigator.language.split('-')[0];
    if (supportedLanguages.indexOf(browserLanguage) !== -1) {
        return browserLanguage;
    }

    // Default to Dutch
    return 'nl';
}

/**
 * Change the displayed language and save preference
 * @param {string} language - Language code ('nl' or 'fr')
 */
function changeLanguage(language) {
    // Save preference to localStorage
    localStorage.setItem('cabal-language', language);

    // Update the html lang attribute
    document.documentElement.lang = language;

    // Hide all language-specific elements
    var allLangElements = document.querySelectorAll('[lang="nl"], [lang="fr"]');
    for (var i = 0; i < allLangElements.length; i++) {
        allLangElements[i].style.display = 'none';
    }

    // Show elements with the selected language
    var selectedLangElements = document.querySelectorAll('[lang="' + language + '"]');
    for (var j = 0; j < selectedLangElements.length; j++) {
        selectedLangElements[j].style.display = '';
    }
}

// Initialize the page with the preferred language when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        changeLanguage(getPreferredLanguage());
    });
} else {
    changeLanguage(getPreferredLanguage());
}
