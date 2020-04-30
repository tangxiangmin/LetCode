/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    var map = {};
    var max = 0;
    for (var i = 1; i <= n; ++i) {
        var sum = posSum(i);
        if (!map[sum]) {
            map[sum] = [];
        }
        map[sum].push(sum);
        var len = map[sum].length;
        if (max < len) {
            max = len;
        }
    }
    return Object.values(map).filter((arr) => arr.length === max).length;
    function posSum(m) {
        var ans = 0;
        while (m) {
            ans += m % 10;
            m = Math.floor(m / 10);
        }
        return ans;
    }
};

var n = 13
var res = countLargestGroup(n)
console.log(res)
