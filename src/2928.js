/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
// 这是一道排列组合的题，将n个糖果分成3堆，每一堆的数量不能超过limit个
var distributeCandies = function (n, limit) {
    // GG
    var ans = 0
    for (var i = 0; i <= limit; ++i) {
        for (var j = 0; j <= limit; ++j) {
            for (var k = 0; k <= limit; ++k) {
                if (i + j + k == n) ans++;
            }
        }
    }
    return ans
};
var n = 5, limit = 2
var ans = distributeCandies(n, limit)
console.log(ans)