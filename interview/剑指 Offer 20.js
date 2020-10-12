/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(!s) return false

    return !isNaN(Number(s))
};

console.log(isNumber(" "))