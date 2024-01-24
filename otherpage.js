let text = "";
let charIndex = 0;
let myElement;
const currentPage = window.location.pathname;
const currentPageName = currentPage.split('/').pop();

if ("projects.html" == currentPageName) {
    myElement = document.getElementById('projects_title');
    text = "Projects();";
}
else if ("about.html" == currentPageName) {
    myElement = document.getElementById('about_title');
    text = "About();";
}
else if ("join.html" == currentPageName) {
    myElement = document.getElementById('join_title');
    text = "Join();";
}
else {

}


function pageTitle() {
    myElement.classList.add('blink-animation');
    const currentText = text.substring(0, charIndex);
    const typingSpeed = 200;

    myElement.textContent = currentText;

    if (charIndex < text.length) {
        charIndex++;
    } 
    else {
        myElement.classList.remove('blink-animation');
        myElement.style.borderRight = '0.4vh solid rgba(244, 249, 255, 0)';
        return;
    }

    setTimeout(pageTitle, typingSpeed);
}

pageTitle();