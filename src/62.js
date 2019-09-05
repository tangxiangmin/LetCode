/**
 * @param {number} m
 * @param {number} n
 * @return {number}
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
        let res = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
        console.log(res);
        map.set(key, res);

        return res;
    }
    return step(m, n);
};

console.log(uniquePaths(23, 12));
