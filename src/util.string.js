"use strict";
const kCaseRegExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
<<<<<<< HEAD
const kebabCase  = (str) => str.match(kCaseRegExp).map(x => x.toLowerCase()).join('-');
const snakeCase  = (str) => str.match(kCaseRegExp).map(x => x.toLowerCase()).join('_');
=======
const kebabCase = (str) => str.match(kCaseRegExp).map(x => x.toLowerCase()).join('-');
const snakeCase = (str) => str.match(kCaseRegExp).map(x => x.toLowerCase()).join('_');
>>>>>>> autocompleter

const camelCase = (str) => {
    let s = str.match(kCaseRegExp)
        .map(x => x.slice(0, 1)
            .toUpperCase() + x.slice(1)
            .toLowerCase())
        .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

const titleCase = (str) => {
<<<<<<< HEAD
    let s = str.camelCase();
    return str.camelCase()[0].toLocaleUpperCase() + s.slice(1);
}

export {capitalize,kebabCase,snakeCase,camelCase,titleCase}
=======
    const s = camelCase(str);
    return s[0].toLocaleUpperCase() + s.slice(1);
}


export { capitalize, kebabCase, snakeCase, camelCase, titleCase as default }
>>>>>>> autocompleter
