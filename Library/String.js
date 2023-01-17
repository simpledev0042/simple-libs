/**
 * 
 * @param {String} str specail "'`_
 * @param {RegExp} specials /[^\w\s\-]/gi
 * @returns String specail_
 */

exports.removeSpecialChars = (str = "", specials = /[^\w\s\-]/gi) => {
    return str.replace(specials, '')
}