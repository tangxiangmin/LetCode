/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    var nums = strs.map((str) => {
        return /^\d+$/.test(str) ? parseInt(str, 10) : str.length;
    });
    return Math.max(...nums);
};

var strs = ["alic3", "bob", "3", "4", "00000"];
var ans = maximumValue(strs);
console.log(ans);
