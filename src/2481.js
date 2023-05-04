/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
    if (n === 1) return 0;
    return n % 2 === 0 ? n / 2 : n;
};

var n = 4;
n = 3;
var ans = numberOfCuts(n);
console.log(ans);
