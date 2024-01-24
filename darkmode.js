document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.querySelector(".darkMode");
    const body = document.body;
    const content = document.getElementById('content');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    updateStyles();

    darkModeButton.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        updateStyles();
    });

    darkModeButton.addEventListener('mouseover', handleHover);
    darkModeButton.addEventListener('mouseout', handleMouseOut);

    function handleHover() {
        // Updated hover colors
        const hoverBackgroundColor = isDarkMode ? '#f4f9ff' : '#a3e0ff';
        const hoverBorderColor = isDarkMode ? '#1c1c1c' : '#a3e0ff';
        const hoverColor = isDarkMode ? '#1c1c1c' : '#1c1c1c';
        darkModeButton.style.backgroundColor = hoverBackgroundColor;
        darkModeButton.style.borderColor = hoverBorderColor;
        darkModeButton.style.color = hoverColor;
        darkModeButton.innerHTML = isDarkMode ? 'change colors?' : 'change colors?';
    }

    function handleMouseOut() {
        // Updated default colors
        const outBackgroundColor = isDarkMode ? '#1c1c1c' : '#1c1c1c';
        const outBorderColor = isDarkMode ? '#1c1c1c' : '#a3e0ff';
        const outColor = isDarkMode ? '#f4f9ff' : '#a3e0ff';

        darkModeButton.style.backgroundColor = outBackgroundColor;
        darkModeButton.style.borderColor = outBorderColor;
        darkModeButton.style.color = outColor;
        darkModeButton.innerHTML = isDarkMode ? 'change colors?' : 'change colors?';
    }

    function updateStyles() {
        const backgroundColor = isDarkMode ? '#f4f9ff' : '#1c1c1c';
        const textColor = isDarkMode ? '#1c1c1c' : '#a3e0ff';

        body.style.backgroundColor = backgroundColor;
        body.style.color = textColor;
        updateLinkColors(textColor);
        updateButtonStyles();

        setTimeout(() => {
            body.style.transition = '';
        }, 0);

        body.style.transition = 'none';
    }

    function updateLinkColors(color) {
        const links = document.querySelectorAll('a');
        links.forEach(function (link) {
            link.style.color = color;
        });
    }

    function updateButtonStyles() {
        // Updated initial colors
        const buttonBackgroundColor = isDarkMode ? '#f4f9ff' : '#1c1c1c';
        const buttonBorderColor = isDarkMode ? '#1c1c1c' : '#a3e0ff';
        const buttonColor = isDarkMode ? '#1c1c1c' : '#a3e0ff';
        darkModeButton.style.backgroundColor = buttonBackgroundColor;
        darkModeButton.style.borderColor = buttonBorderColor;
        darkModeButton.style.color = buttonColor;
        darkModeButton.innerHTML = isDarkMode ? 'change colors?' : 'change colors?';
        const bottomLine = document.querySelector('.bottom_line');
        bottomLine.style.backgroundColor = isDarkMode ? '#1c1c1c' : '#424648';
        bottomLine.style.borderColor = isDarkMode ? '#1c1c1c' : '#424648';
        bottomLine.style.color = isDarkMode ? '#f4f9ff' : '#9999a1';
    }
});
