/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    var ans = 0;
    for (var i = 1; i <= n; ++i) {
        for (var j = 1; j <= n; ++j) {
            for (var k = 1; k <= n; ++k) {
                if (i * i + j * j === k * k) {
                    ans++;
                }
            }
        }
    }
    return ans;
};
