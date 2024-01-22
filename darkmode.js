document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;
    const h1 = document.getElementById('title');
    const h2 = document.getElementById('intro');
    const p = document.getElementById('description');
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    let count = 0;

    function generateRainbowColor() {
        const time = new Date().getTime();
        const frequency = 0.1; // Adjust this value to control the speed of color change
        const r = Math.sin(frequency * time + 0) * 127 + 128;
        const g = Math.sin(frequency * time + 2) * 127 + 128;
        const b = Math.sin(frequency * time + 4) * 127 + 128;
        return `rgb(${r}, ${g}, ${b})`;
      }

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('darker');
        count += 1;
        if (count % 2 == 1) {
            updateLinkColors('#d7e1f1');
            darkModeButton.style.backgroundColor = '#d7e1f1';
            darkModeButton.style.borderColor = '#d7e1f1';
            darkModeButton.style.color = '#233255';
            darkModeButton.innerHTML = "light mode?";
        } 
        else if (count % 3 == 0) {
            while (count % 3 == 0){
                updateLinkColors('#d7e1f1');
                darkModeButton.style.backgroundColor = '#' + generateRainbowColor();
                darkModeButton.style.borderColor = '#' + generateRainbowColor();
                darkModeButton.style.color = '#' + generateRainbowColor();
                body.style.backgroundColor = '#' + generateRainbowColor();
                h1.style.color = '#' + generateRainbowColor();
                h2.style.color = '#' + generateRainbowColor();
                p.style.color = '#' + generateRainbowColor();
                darkModeButton.innerHTML = "¿easter egg?";
                setInterval(morphBackgroundColor, 50);
            }
        }
        else {
            updateLinkColors('#233255');
            darkModeButton.style.backgroundColor = '#233255';
            darkModeButton.style.borderColor = '#233255';
            darkModeButton.style.color = '#d7e1f1';
            darkModeButton.innerHTML = "dark mode?";
        }
    });

    darkModeButton.addEventListener("mouseover", function() {
        if (count % 2 == 1) {
            darkModeButton.style.backgroundColor = '#233255';
            darkModeButton.style.borderColor = '#d7e1f1';
            darkModeButton.style.color = '#d7e1f1';
            darkModeButton.innerHTML = "light mode?";
        } 
        else {
            darkModeButton.style.backgroundColor = '#d7e1f1';
            darkModeButton.style.borderColor = '#233255';
            darkModeButton.style.color = '#233255';
            darkModeButton.innerHTML = "dark mode?";
        }
      });
  
      darkModeButton.addEventListener("mouseout", function() {
        if (count % 2 == 1) {
            darkModeButton.style.backgroundColor = '#d7e1f1';
            darkModeButton.style.borderColor = '#d7e1f1';
            darkModeButton.style.color = '#233255';
            darkModeButton.innerHTML = "light mode?";
        } 
        else {
            darkModeButton.style.backgroundColor = '#233255';
            darkModeButton.style.borderColor = '#233255';
            darkModeButton.style.color = '#d7e1f1';
            darkModeButton.innerHTML = "dark mode?";
        }
      });

    function updateLinkColors(color) {
        const links = document.querySelectorAll('a');
        links.forEach(function (link) {
            link.style.color = color;
        });
    }
});
