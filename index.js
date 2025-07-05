const textBox = document.querySelector('.text-box');
const wordCount = document.getElementById('wordCount');
const charCountNoSpaces = document.getElementById('charCountNoSpaces');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');

textBox.addEventListener('input', () => {
    const text = textBox.value;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    const charsNoSpaces = text.replace(/\s/g, '');
    charCountNoSpaces.textContent = charsNoSpaces.length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textContent = sentences.length;

    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    paragraphCount.textContent = paragraphs.length;
});