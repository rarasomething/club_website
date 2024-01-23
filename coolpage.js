const textArray = ["print('Hello, World!')", "System.out.println('Hello, World!')", "Console.log('Hello, World!')"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textArray[textIndex];
    const typingSpeed = 100; // Adjust typing speed (milliseconds)

    if (!isDeleting && charIndex < currentText.length) {
        document.getElementById("typing-text").innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        document.getElementById("typing-text").innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeText, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Start the typing animation
typeText();