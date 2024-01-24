const text = "Hello, World!";
let charIndex = 0;

function helloWorld() {
    const currentText = text.substring(0, charIndex);
    const typingSpeed = 200;

    document.getElementById("hello_world_title").textContent = currentText;

    if (charIndex < text.length) {
        charIndex++;
    } 
    else {
        document.getElementById("description").style.border = "none";
        return;
    }
    setTimeout(helloWorld, typingSpeed);
}

helloWorld();