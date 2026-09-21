document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme');

    themeSelector.addEventListener('change', () => {
        const selectedTheme = themeSelector.value;
        document.body.className = selectedTheme;
    });
});
