/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 思路：bfs，从0,0开始，查找所有能够到达的区域
var movingCount = function (m, n, k) {
    var ans = 0;
    var memo = {};
    bfs(0, 0);
    return ans;
    function bfs(i, j) {
        var key = `${i},${j}`;
        if (memo[key]) return;
        memo[key] = true;
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        var cell = posSum(i) + posSum(j);
        if (cell > k) return;
        ans++;
        bfs(i - 1, j);
        bfs(i + 1, j);
        bfs(i, j - 1);
        bfs(i, j + 1);
    }

    function posSum(m) {
        var ans = 0;
        while (m) {
            ans += m % 10;
            m = Math.floor(m / 10);
        }
        return ans;
    }
};
var m = 2,
    n = 3,
    k = 1;
(m = 16), (n = 8), (k = 4);

var res = movingCount(m, n, k);
console.log(res);
