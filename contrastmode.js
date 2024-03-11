document.addEventListener('DOMContentLoaded', function () {
    const contrastModeButton = document.querySelector(".contrastMode");
    const body = document.body;
    const content = document.getElementById('content');
    let isContrastMode = localStorage.getItem('contrastMode') === 'true';
    updateStyles();

    contrastModeButton.addEventListener('click', function () {
        isContrastMode = !isContrastMode;
        localStorage.setItem('contrastMode', isContrastMode);
        updateStyles();
    });

    contrastModeButton.addEventListener('mouseover', handleHover);
    contrastModeButton.addEventListener('mouseout', handleMouseOut);

    function handleHover() {
        const hoverBackgroundColor = isContrastMode ? '#ffffff' : '#a3e0ff';
        const hoverBorderColor = isContrastMode ? '#ffffff' : '#a3e0ff';
        const hoverColor = isContrastMode ? '#11121f' : '#1c1c1c';
        contrastModeButton.style.backgroundColor = hoverBackgroundColor;
        contrastModeButton.style.borderColor = hoverBorderColor;
        contrastModeButton.style.color = hoverColor;
        contrastModeButton.innerHTML = isContrastMode ? 'less colors?' : 'more colors?';
    }

    function handleMouseOut() {
        const outBackgroundColor = isContrastMode ? '#11121f' : '#1c1c1c';
        const outBorderColor = isContrastMode ? '#ffffff' : '#a3e0ff';
        const outColor = isContrastMode ? '#ffffff' : '#a3e0ff';

        contrastModeButton.style.backgroundColor = outBackgroundColor;
        contrastModeButton.style.borderColor = outBorderColor;
        contrastModeButton.style.color = outColor;
        contrastModeButton.innerHTML = isContrastMode ? 'less colors?' : 'more colors?';
    }

    function updateStyles() {
        const orangeText = document.querySelectorAll('.orangeText');
        const orangeColor = isContrastMode ? '#fcab31' : '#a3e0ff';
        orangeText.forEach(element => {
            element.style.color = orangeColor;
        });
        const section1 = document.querySelectorAll('.section1');
        const section1Color = isContrastMode ? '#26243b' : '#292929';
        section1.forEach(element => {
            element.style.backgroundColor = section1Color;
        });
        const pinkText = document.querySelectorAll('.pinkText');
        const pinkColor = isContrastMode ? '#ee69d4' : '#c078d4';
        pinkText.forEach(element => {
            element.style.color = pinkColor;
        });
        const yellowText = document.querySelectorAll('.yellowText');
        const yellowColor = isContrastMode ? '#f6d02a' : '#fff3b4';
        yellowText.forEach(element => {
            element.style.color = yellowColor;
        });
        const blueText = document.querySelectorAll('.blueText');
        const blueColor = isContrastMode ? '#6c90ff' : '#589adc';
        blueText.forEach(element => {
            element.style.color = blueColor;
        });
        const headerTwoText = document.querySelectorAll('h2');
        const headerTwoColor = isContrastMode ? '#50d159' : '#81c062';
        headerTwoText.forEach(element => {
            element.style.color = headerTwoColor;
        });
        const backgroundText = document.querySelectorAll('.backgroundText');
        const backgroundTextColor = isContrastMode ? '#11121f' : '#1c1c1c';
        backgroundText.forEach(element => {
            element.style.color = backgroundTextColor;
        });

        const backgroundColor = isContrastMode ? '#11121f' : '#1c1c1c';
        const textColor = isContrastMode ? '#ffffff' : '#a3e0ff';

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
        const buttonBackgroundColor = isContrastMode ? '#11121f' : '#1c1c1c';
        const buttonBorderColor = isContrastMode ? '#ffffff' : '#a3e0ff';
        const buttonColor = isContrastMode ? '#ffffff' : '#a3e0ff';
        contrastModeButton.style.backgroundColor = buttonBackgroundColor;
        contrastModeButton.style.borderColor = buttonBorderColor;
        contrastModeButton.style.color = buttonColor;
        contrastModeButton.innerHTML = isContrastMode ? 'less colors?' : 'more colors?';
        const bottomLine = document.querySelector('.bottom_line');
        bottomLine.style.backgroundColor = isContrastMode ? '#1a1b29' : '#424648';
        bottomLine.style.borderColor = isContrastMode ? '#1a1b29' : '#424648';
        bottomLine.style.color = isContrastMode ? '#ffffff' : '#9999a1';
    }
});
