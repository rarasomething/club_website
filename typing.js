const textArray = ["print('Hello, World!')", "System.out.println('Hello, World!');", "Console.WriteLine('Hello, World!');", "printf('Hello, World!);", "cout << 'Hello, World!' << endl;"];
const languageArray = ["Python", "Java", "C#", "C", "C++"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const body = document.body;

async function typeText() {
    const currentText = textArray[textIndex].substring(0, charIndex);
    const currentLanguage = languageArray[textIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;

    document.getElementById("typing-text").textContent = currentText;
    document.getElementById("language").textContent = currentLanguage;

    if (!isDeleting && charIndex < textArray[textIndex].length) {
        charIndex++;
    } 
    else if (isDeleting && charIndex > 0) {
        charIndex--;
    }
    else if (!isDeleting && textArray[textIndex].length == charIndex) {
        await new Promise(r => setTimeout(r, 2000));
        isDeleting = !isDeleting;
    }
    else {
        await new Promise(r => setTimeout(r, 1000));
        isDeleting = !isDeleting;
        if (charIndex == 0) {
            textIndex = (textIndex + 1) % textArray.length;
        }
    }
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

typeText();