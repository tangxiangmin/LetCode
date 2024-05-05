/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    const a = /[aeiou]/i.test(word)
    const b = /[bcdfghjklmnpqrstvwxyz]/i.test(word)
    const c = /^[0-9a-zA-z]{3,}$/igm.test(word)
    // console.log(a, b, c)
    return a && b && c
};

var word = "234Adas"
word = "UuE6"
var ans = isValid(word)
console.log(ans)