const generateBtn = document.getElementById('generate');
const label = document.getElementById('numberRandom');
const stateLbl = document.getElementById('state');
const nombreLbl = document.getElementById('nombre');
const nacimientoLbl = document.getElementById('nacimiento');

generateBtn.addEventListener('click', () => {
    const city = procedencia();
    const number = numberClosure(
        codigoCiudad[city],
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
    stateLbl.textContent = city;
    nombreLbl.textContent = fixCase(nombre()) + ", " + fixCase(apellido()) + " " + fixCase(apellido());
    const month = getRandomIntInclusive(1, 12);
    nacimientoLbl.textContent = getRandomIntInclusive(1, DAYS_PER_MONTH[month]) + "/" + month + "/" + getRandomIntInclusive(1927, 2005);
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

const procedencia = () => {
    if (Math.random() > 0.37) {
        return "Ciudad de México";
    } else {
        const otro = Math.random();
        if (otro < 0.490000) {
            return "Estado de México";
        } else if (otro < 0.550000) {
            return "Veracruz";
        } else if (otro < 0.590000) {
            return "Guerrero";
        } else if (otro < 0.616715) {
            return "Jalisco";
        } else if (otro < 0.643003) {
            return "Chiapas";
        } else if (otro < 0.703003) {
            return "Puebla";
        } else if (otro < 0.743003) {
            return "Oaxaca";
        } else if (otro < 0.761378) {
            return "Tabasco";
        } else if (otro < 0.779566) {
            return "Michoacán";
        } else if (otro < 0.797395) {
            return "Tamaulipas";
        } else if (otro < 0.813594) {
            return "Sinaloa";
        } else if (otro < 0.828734) {
            return "Guanajuato";
        } else if (otro < 0.843746) {
            return "Nuevo León";
        } else if (otro < 0.858486) {
            return "Baja California";
        } else if (otro < 0.872336) {
            return "Hidalgo";
        } else if (otro < 0.884338) {
            return "Quintana Roo";
        } else if (otro < 0.895920) {
            return "San Luis Potosí";
        } else if (otro < 0.906784) {
            return "Morelos";
        } else if (otro < 0.917260) {
            return "Sonora";
        } else if (otro < 0.927243) {
            return "Querétaro";
        } else if (otro < 0.937130) {
            return "Chihuahua";
        } else if (otro < 0.946813) {
            return "Coahuila";
        } else if (otro < 0.955794) {
            return "Durango";
        } else if (otro < 0.963362) {
            return "Zacatécas";
        } else if (otro < 0.970591) {
            return "Campache";
        } else if (otro < 0.976918) {
            return "Nayarit";
        } else if (otro < 0.982414) {
            return "Yucatán";
        } else if (otro < 0.987071) {
            return "Tlaxcala";
        } else if (otro < 0.991683) {
            return "Colima";
        } else if (otro < 0.996115) {
            return "Baja California Sur";
        } else if (otro < 1) {
            return "Aguascalientes";
        }
    }
};

const nombre = () => {
    if (Math.random() > 0.522) {
        return NOMBRES_POPULARES_1[Math.floor(Math.random() * NOMBRES_POPULARES_1.length)];
    } else {
        return NOMBRES_POPULARES_0[Math.floor(Math.random() * NOMBRES_POPULARES_0.length)];
    }
};

const apellido = () => {
    return APELLIDOS_POPULARES[Math.floor(Math.random() * APELLIDOS_POPULARES.length)];
};

const fixCase = (str) => {
    let strArr = str.split(" ");
    strArr = strArr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return strArr.join(" ");
}