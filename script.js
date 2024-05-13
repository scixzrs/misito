// You can add any interactive functionality or effects here
// For example, you could create a typing effect for the hero section text:

const heroText = document.querySelector('.hero p');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();
