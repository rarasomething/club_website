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
        const hoverBackgroundColor = isDarkMode ? '#ffffff' : '#a3e0ff';
        const hoverBorderColor = isDarkMode ? '#ffffff' : '#a3e0ff';
        const hoverColor = isDarkMode ? '#0f1126' : '#1c1c1c';
        darkModeButton.style.backgroundColor = hoverBackgroundColor;
        darkModeButton.style.borderColor = hoverBorderColor;
        darkModeButton.style.color = hoverColor;
        darkModeButton.innerHTML = isDarkMode ? 'lower contrast?' : 'higher contrast?';
    }

    function handleMouseOut() {
        // Updated default colors
        const outBackgroundColor = isDarkMode ? '#0f1126' : '#1c1c1c';
        const outBorderColor = isDarkMode ? '#ffffff' : '#a3e0ff';
        const outColor = isDarkMode ? '#ffffff' : '#a3e0ff';

        darkModeButton.style.backgroundColor = outBackgroundColor;
        darkModeButton.style.borderColor = outBorderColor;
        darkModeButton.style.color = outColor;
        darkModeButton.innerHTML = isDarkMode ? 'lower contrast?' : 'higher contrast?';
    }

    function updateStyles() {
        const orangeText = document.querySelectorAll('.orangeText');
        const orangeColor = isDarkMode ? '#fcab31' : '#a3e0ff';
        orangeText.forEach(element => {
            element.style.color = orangeColor;
        });
        const pinkText = document.querySelectorAll('.pinkText');
        const pinkColor = isDarkMode ? '#ee69d4' : '#c078d4';
        pinkText.forEach(element => {
            element.style.color = pinkColor;
        });
        const yellowText = document.querySelectorAll('.yellowText');
        const yellowColor = isDarkMode ? '#f6d02a' : '#fff3b4';
        yellowText.forEach(element => {
            element.style.color = yellowColor;
        });
        const blueText = document.querySelectorAll('.blueText');
        const blueColor = isDarkMode ? '#6c90ff' : '#589adc';
        blueText.forEach(element => {
            element.style.color = blueColor;
        });
        const headerTwoText = document.querySelectorAll('h2');
        const headerTwoColor = isDarkMode ? '#50d159' : '#81c062';
        headerTwoText.forEach(element => {
            element.style.color = headerTwoColor;
        });

        const backgroundColor = isDarkMode ? '#0f1126' : '#1c1c1c';
        const textColor = isDarkMode ? '#ffffff' : '#a3e0ff';

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
        const buttonBackgroundColor = isDarkMode ? '#0f1126' : '#1c1c1c';
        const buttonBorderColor = isDarkMode ? '#ffffff' : '#a3e0ff';
        const buttonColor = isDarkMode ? '#ffffff' : '#a3e0ff';
        darkModeButton.style.backgroundColor = buttonBackgroundColor;
        darkModeButton.style.borderColor = buttonBorderColor;
        darkModeButton.style.color = buttonColor;
        darkModeButton.innerHTML = isDarkMode ? 'lower contrast?' : 'higher contrast?';
        const bottomLine = document.querySelector('.bottom_line');
        bottomLine.style.backgroundColor = isDarkMode ? '#212659' : '#424648';
        bottomLine.style.borderColor = isDarkMode ? '#212659' : '#424648';
        bottomLine.style.color = isDarkMode ? '#ffffff' : '#9999a1';
    }
});
