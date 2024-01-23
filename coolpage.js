const textArray = ["print('Hello, World!')", "System.out.println('Hello, World!')", "Console.log('Hello, World!')"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetText = "Hello, World!";
const body = document.body;

function typeText() {
    const currentText = textArray[textIndex].substring(0, charIndex);
    const typingSpeed = 50; // Adjust typing speed (milliseconds)
    const deletingSpeed = 50; // Adjust deleting speed (milliseconds)

    document.getElementById("typing-text").textContent = currentText;

    // Change color to red when displaying "Hello, World!"
    const isHelloWorld = currentText === targetText;
    document.getElementById("typing-text").classList.toggle("red-text", isHelloWorld);

    if (!isDeleting && charIndex < textArray[textIndex].length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (charIndex == 0){
            setTimeout(function() {textIndex = (textIndex + 1) % textArray.length;}, 2000);
            return 0;
        }
    }
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

function redirectToPage() {
    window.location.href = 'main.html';
}

async function cool() {
    while (window.location.href === 'index.html') {
        await typeText();
    }
}

cool();