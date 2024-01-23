document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;
    let count = 0;

    document.addEventListener('DOMContentLoaded', function () {
        if(count%2 == 1){
            updateLinkColors('#d7e1f1');
            darkModeButton.style.backgroundColor = '#d7e1f1';
            darkModeButton.style.borderColor = '#d7e1f1';
            darkModeButton.style.color = '#233255';
            darkModeButton.innerHTML = "light mode"
        }
        else{
            updateLinkColors('#233255');
            darkModeButton.style.backgroundColor = '#233255';
            darkModeButton.style.borderColor = '#233255';
            darkModeButton.style.color = '#d7e1f1';
            darkModeButton.innerHTML = "dark mode?";
        }
    });

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
