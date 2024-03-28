/**
 * @param {number} k
 * @return {number}
 */
// dfs枚举每种情况
var minOperations = function (k) {

    let cache = {}
    function dfs(i, sum) {
        if (cache[i]) return cache[i]
        if (sum >= k) {
            return 0
        }
        const val = Math.min(dfs(i + 1, sum + 1), dfs(i, sum + i)) + 1
        cache[i] = val
        return val
    }

    return dfs(1, 1)
};

var k = 11
// k = 1
// k = 2
// k = 4
// k = 3
k = 72
var ans = minOperations(k)
console.log(ans)