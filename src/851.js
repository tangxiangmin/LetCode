/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
    const n = quiet.length
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of richer) {

        g[b].push(a)
    }

    const ans = []
    const cache = {}
    for (let i = 0; i < n; ++i) {
        ans[i] = calc(i)
    }
    return ans
    function calc(target) {

        function dfs(i) {
            if (cache[i] !== undefined) return cache[i]
            let min = i
            for (const a of g[i]) {
                let v = dfs(a)
                if (quiet[v] < quiet[min]) {
                    min = v
                }
            }
            cache[i] = min
            return min
        }
        return dfs(target)
    }
};
var richer = [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], quiet = [3, 2, 5, 4, 6, 1, 7, 0]
// richer = [], quiet = [0]
var ans = loudAndRich(richer, quiet)
console.log(ans)