const generateBtn = document.getElementById('#generate');
const label = document.getElementById("numberRandom");

generateBtn.addEventListener('click', () => {
    var number = Math.random();
    label.textContent = number;
});