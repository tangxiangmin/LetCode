/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    return T.split('').sort((a, b)=>{
        return S.indexOf(a) - S.indexOf(b)
    }).join('')
};

let S = "cba";
let T = "abcd";
let res = customSortString(S,T)
console.log(res)
