function getSavedDarkMode() {
    const value = window.localStorage.getItem("darkMode");
    if (value == "true") {
        return true;
    }
    if (value == "false") {
        return false;
    }
    // if no local storage saved, use system one
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateDarkMode(darkMode) {
    const darkModeSwitchTexts = document.querySelectorAll(".dark-mode-switch-text");
    const docElement = document.documentElement;
    if (darkMode) {
        docElement.classList.add("dark-mode");
        for(const el of darkModeSwitchTexts) {
            el.setHTMLUnsafe("light");
        }
    } else {
        docElement.classList.remove("dark-mode");
        for(const el of darkModeSwitchTexts) {
            el.setHTMLUnsafe("dark");
        }
    }
}

function toggleDarkMode() {
    const prevDarkMode = getSavedDarkMode();
    const darkMode = !prevDarkMode;
    window.localStorage.setItem("darkMode", darkMode);
    updateDarkMode(darkMode);
}

function refreshDarkMode() {
    const darkMode = getSavedDarkMode();
    updateDarkMode(darkMode);
}

document.addEventListener("DOMContentLoaded", refreshDarkMode);
refreshDarkMode();