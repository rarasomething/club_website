const textArray = ["print('Hello, World!')", "System.out.println('Hello, World!')", "Console.log('Hello, World!')"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetText = "Hello, World!";
const body = document.body;

function typeText() {
    const currentText = textArray[textIndex].substring(0, charIndex);
    const typingSpeed = 150;
    const deletingSpeed = 50;

    document.getElementById("typing-text").textContent = currentText;

    if (!isDeleting && charIndex < textArray[textIndex].length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (charIndex == 0) {
            textIndex = (textIndex + 1) % textArray.length;
        }
    }
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

document.getElementById('typing-text').addEventListener('click', function () {
    window.scrollBy(0, window.innerHeight);
});

typeText();