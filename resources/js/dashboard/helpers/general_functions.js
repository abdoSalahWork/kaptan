export const formBuilder = (languages, formInputs={}, translatableInputs=[]) => {
    let keys = Object.keys(formInputs);
    let formBuilder = {};
    keys.map((input) => {
        if (!translatableInputs.includes(input)) {
            formBuilder[input] = formInputs[input];
        }else {
            formBuilder[input] = {};
            languages.map((lang) => {
                formBuilder[input][lang.language_code] = formInputs[input];
            });
        }
    })
    return formBuilder;
}

export const getFromObject = (obj, el, defaultValue='') => {
    return myIf(obj, el, obj[el], defaultValue)
}

export const myIf = (obj, el, trueValue, falseValue) => {
    return obj[el] ? trueValue : falseValue;
}

export const handleOptions = (options) => {
    let ops = {};
    options.map((option) => {
        ops[option.option_key] = option.option_value;
    })
    return ops;
}

export const successAlert = {
    class: 'info',
    icon: 'flaticon-like',
    title: "success_message"
}

export const dangerAlert = {
    class: 'danger',
    icon: 'flaticon-warning',
    title: "error_message"
}

function timeSinceFromNow(date) {
    if (date == '' || date == null) return '';

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }

    return Math.floor(seconds) + " seconds";
}

export const isTrue = (value) => {
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
            return true;
        default:
            return false;
    }
}

export const generateSlug = (text) => {
    return text.toLowerCase().replace(/([^أ-يA-Za-z0-9]|-)+/g,'-').replace(/ +/g,'-');
}

export const isEmptyObject = (object) => {
    return Object.keys(object).length == 0;
}

export const compareTwoArray = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.sort().join(',') === array2.sort().join(',');
}

export const getParents = (el, parentSelector) => {
    var parents = [];
    var p = el?.parentNode;
    while (p) {
        if (p == document) break;
        if (p.classList.contains(parentSelector)) {
            parents.push(p);
        }
        p = p.parentNode;
    }
    return parents;
}

export function getTranslation(key, defaultValue = "") {
    const keys = key.split(".");
    let translation = window.translations;
    for (const k of keys) {
        if (translation[k] === undefined) {
            console.warn(`Translation for key "${key}" not found".`);
            return defaultValue || key;
        }
        translation = translation[k];
    }

    return translation;
}
