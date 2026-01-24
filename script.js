const textElement = document.getElementById('typewriter');
const texts = ['Computer Science Graduate', 'Software Engineer', 'Full Stack Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2 seconds before typing next phrase
    } else {
        setTimeout(type, 100);
    }
}());