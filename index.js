// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('magicButton');

    btn.addEventListener('click', () => {
        alert('The files are linked and working perfectly!');
        document.body.style.backgroundColor = '#e1f5fe';
    });
    
    console.log("index.js is officially connected.");
});
