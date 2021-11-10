/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    function walk(n, count) {
        if (n === 1) return count;
        if (n % 2 === 0) {
            return walk(n / 2, count + n / 2);
        } else {
            return walk((n - 1) / 2 + 1, count + (n - 1) / 2);
        }
    }
    return walk(n, 0);
};
var n = 7;
var ans = numberOfMatches(n);
console.log(ans);
