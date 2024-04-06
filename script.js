const generateBtn = document.getElementById('generate');
const label = document.getElementById('numberRandom');

generateBtn.addEventListener('click', () => {
    var number = Math.random();
    label.textContent = numberClosure(
        getRandomIntInclusive(2, 9),
        getRandomIntInclusive(1, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9),
        getRandomIntInclusive(0, 9));
});

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

const numberClosure = template`${0}${1} ${2}${3}${4}${5} ${6}${7}${8}${9}`;
