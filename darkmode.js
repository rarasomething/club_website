document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;
    const content = document.getElementById('content');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Initial styles
    updateStyles();

    // Event listeners
    darkModeButton.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        updateStyles();
    });

    darkModeButton.addEventListener('mouseover', handleHover);
    darkModeButton.addEventListener('mouseout', handleMouseOut);

    // Functions
    function handleHover() {
        const hoverBackgroundColor = isDarkMode ? '#00ff99' : '#090f23';
        const hoverBorderColor = isDarkMode ? '#090f23' : '#00ff99';
        const hoverColor = isDarkMode ? '#090f23' : '#00ff99';

        darkModeButton.style.backgroundColor = hoverBackgroundColor;
        darkModeButton.style.borderColor = hoverBorderColor;
        darkModeButton.style.color = hoverColor;
        darkModeButton.innerHTML = isDarkMode ? 'light mode?' : 'dark mode?';
    }

    function handleMouseOut() {
        const outBackgroundColor = isDarkMode ? '#090f23' : '#00ff99';
        const outBorderColor = isDarkMode ? '#090f23' : '#00ff99';
        const outColor = isDarkMode ? '#00ff99' : '#090f23';

        darkModeButton.style.backgroundColor = outBackgroundColor;
        darkModeButton.style.borderColor = outBorderColor;
        darkModeButton.style.color = outColor;
        darkModeButton.innerHTML = isDarkMode ? 'light mode?' : 'dark mode?';
    }

    function updateStyles() {
        const backgroundColor = isDarkMode ? '#00ff99' : '#090f23';
        const textColor = isDarkMode ? '#090f23' : '#00ff99';

        // Set initial styles directly in the HTML or use inline styles
        body.style.backgroundColor = backgroundColor;
        body.style.color = textColor;
        updateLinkColors(textColor);
        updateButtonStyles();

        // Ensure a consistent firing of DOMContentLoaded event
        setTimeout(() => {
            // Re-enable transition after a short timeout
            body.style.transition = '';
        }, 0);

        // Disable transition during style update
        body.style.transition = 'none';
    }

    function updateLinkColors(color) {
        const links = document.querySelectorAll('a');
        links.forEach(function (link) {
            link.style.color = color;
        });
    }

    function updateButtonStyles() {
        const buttonBackgroundColor = isDarkMode ? '#00ff99' : '#090f23';
        const buttonBorderColor = isDarkMode ? '#090f23' : '#00ff99';
        const buttonColor = isDarkMode ? '#090f23' : '#00ff99';

        darkModeButton.style.backgroundColor = buttonBackgroundColor;
        darkModeButton.style.borderColor = buttonBorderColor;
        darkModeButton.style.color = buttonColor;
        darkModeButton.innerHTML = isDarkMode ? 'light mode?' : 'dark mode?';
    }
});
