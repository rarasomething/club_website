const text = "Hello, World!";
let charIndex = 0;
var myElement = document.getElementById('hello_world_title');

function helloWorld() {
    myElement.classList.add('blink-animation');
    const currentText = text.substring(0, charIndex);
    const typingSpeed = 200;

    document.getElementById("hello_world_title").textContent = currentText;

    if (charIndex < text.length) {
        charIndex++;
    } else {
        myElement.classList.remove('blink-animation');
        myElement.style.borderRight = '0.4vh solid rgba(244, 249, 255, 0)';
        return;
    }

    setTimeout(helloWorld, typingSpeed);
}

helloWorld();
