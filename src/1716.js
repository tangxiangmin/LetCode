/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    var ans = 0;
    var start = 1;
    var weeks = Math.floor(n / 7);
    for (var i = 0; i < weeks; ++i) {
        for (var j = 0; j < 7; ++j) {
            ans += start + j;
        }
        start++;
    }
    var left = n % 7;

    for (var i = 0; i < left; ++i) {
        ans += start + i;
    }
    return ans;
};
var n = 4;
n = 10
n = 20
var ans = totalMoney(n);
console.log(ans);
