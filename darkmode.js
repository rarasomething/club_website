document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('darkMode');
    const body = document.body;
    let count = 0;

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('darker');
        count += 1;
        if (count % 2 == 1) {
            updateLinkColors('#d7e1f1');
        } else {
            updateLinkColors('#233255');
        }
    });

    function updateLinkColors(color) {
        const links = document.querySelectorAll('a');
        links.forEach(function (link) {
            link.style.color = color;
        });
    }
});
