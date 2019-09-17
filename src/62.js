/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var uniquePaths = function(m, n) {
    let map = new Map();

    function step(m, n) {
        if (m == 1) {
            return 1;
        }
        if (n == 1) {
            return 1;
        }
        let key = m + "," + n;
        
        if (map.has(key)) {
            return map.get(key);
        }

        let res = step(m - 1, n) + step(m, n - 1);

        map.set(key, res);

        return res;
    }

    return step(m, n);
};

var m = 3, n = 2
m = 23, n = 12

var res = uniquePaths(m, n)

console.log(res)