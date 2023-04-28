/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    var min = Math.min(a, b);
    var ans = 0;
    for (var i = 1; i <= min; ++i) {
        if (a % i === 0 && b % i === 0) {
            ans++;
        }
    }
    return ans;
};

var a = 12, b = 6
var ans = commonFactors(a,b)
console.log(ans)