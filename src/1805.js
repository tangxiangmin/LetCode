/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    var tokens = {};
    var token = "";
    for (var ch of word) {
        if (/\d/.test(ch)) {
            if (ch === "0") {
                if (token !== "0") {
                    token += ch;
                }
            } else {
                if (token === "0") {
                    token = ch;
                    continue;
                }
                token += ch;
            }
        } else if (token) {
            tokens[token] = true;
            token = "";
        }
    }
    if (token) {
        tokens[token] = true;
    }

    return Object.keys(tokens).length;
};

var word = "a123bc34d8ef34";
word = "leet1234code234";
word = "a1b01c001";
word = "0a0";
var ans = numDifferentIntegers(word);
console.log(ans);
