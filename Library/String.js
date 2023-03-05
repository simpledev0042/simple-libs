const RANDOM_STRING_LOWER = 1;
const RANDOM_STRING_UPPER = 1 << 1;
const RANDOM_STRING_DIGIT = 1 << 2;
const RANDOM_STRING_SPECIAL = 1 << 3;

const removeSpecialChars = (str = "", specials = /[^\w\s\-]/gi) => {
    return str.replace(specials, '')
}

const isEmail = ( email ) => {
    var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return exp.test(email);
}

const random = (length = 32, mode = RANDOM_STRING_LOWER | RANDOM_STRING_UPPER) => {
    let chars = "";
    if (mode & RANDOM_STRING_LOWER) chars += "abcdefghijklmnopqrstuvwxyz";
    if (mode & RANDOM_STRING_UPPER) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (mode & RANDOM_STRING_DIGIT) chars += "0123456789";
    if (mode & RANDOM_STRING_SPECIAL) chars += "!@#$%^&($)|}{[].,<>";
    const len = chars.length;
    let res = '';
    for (var i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * len));
    }
    return res;

}


module.exports = {
    isEmail,
    random,
    removeSpecialChars,
    RANDOM_STRING_LOWER,
    RANDOM_STRING_UPPER,
    RANDOM_STRING_DIGIT, 
    RANDOM_STRING_SPECIAL,
}