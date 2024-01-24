const text = "Hello, World!";
let charIndex = 0;
let isDeleting = false;
const body = document.body;

async function helloWorld() {
    const currentText = text.substring(0, charIndex);
    const typingSpeed = 100;
    const deletingSpeed = 50;

    document.getElementById("hello_world_title").textContent = currentText;

    if (!isDeleting && charIndex < text.length) {
        charIndex++;
    } 
    else if (isDeleting && charIndex > 0) {
        charIndex--;
    }
    else if (!isDeleting && text.length == charIndex) {
        await new Promise(r => setTimeout(r, 2000));
        isDeleting = !isDeleting;
    }
    else {
        await new Promise(r => setTimeout(r, 1000));
        isDeleting = !isDeleting;
    }
    setTimeout(helloWorld, isDeleting ? deletingSpeed : typingSpeed);
}

helloWorld();