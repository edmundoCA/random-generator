const generateBtn = document.getElementById('generate');
const label = document.getElementById('numberRandom');
const stateLbl = document.getElementById('state');

generateBtn.addEventListener('click', () => {
    var number  = numberClosure(
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
    label.textContent = number;
    stateLbl.textContent = getState(+ number.charAt(0));
});

function getState(number) {
    var estados;
    switch (number) {
        case 2:
            estados = ["Puebla", "Veracruz", "Tlaxcala", "Hidalgo"];
            break;
        case 3:
            estados = ["Jalisco", "Colima", "Nayarit"];
            break;
        case 6:
            estados = ["Sinaloa", "Durango", "Chihuahua", "Sonora", "Baja California", "Baja California Sur"];
            break;
        case 5:
            estados = ["CDMX", "Edo. de México"];
            break;
        case 4:
            estados = ["Zacatecas", "San Luis Potosí", "Aguascalientes", "Guanajuato", "Querétaro", "Michoacán"];
            break;
        case 7:
            estados = ["Guerrero", "Morelos"];
            break;
        case 8:
            estados = ["Coahuila", "Nuevo León", "Tamaulipas", ];
            break;
        case 9:
            estados = ["Oaxaca", "Chiapas", "Tabasco", "Campeche", "Yucatán", "Quintana Roo"];
            break;
        default:
            throw new Error("Invalid number");
    }
    return estados[getRandomIntInclusive(0, estados.length - 1)];
}

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
