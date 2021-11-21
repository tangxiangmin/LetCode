/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    var count = 0;
    for (var i = 1; i <= n; ++i) {
        if (n % i === 0) {
            count++;
        }
    }

    return count === 3;
};

var n = 4;
var ans = isThree(n);
console.log(ans);
