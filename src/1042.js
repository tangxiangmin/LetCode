/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
// 直接贪心，从第一个花园开始
var gardenNoAdj = function (n, paths) {
    const g = new Array(n + 1).fill(0).map(() => new Array())
    for (const [a, b] of paths) {
        g[a].push(b)
        g[b].push(a)
    }

    const ans = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; ++i) {
        handle(i)
    }
    return ans.slice(1)

    function handle(i) {
        const used = {}
        for (const sibling of g[i]) {
            used[ans[sibling]] = 1
        }
        for (let j = 1; j <= 4; ++j) {
            if (!used[j]) {
                ans[i] = j
                break
            }
        }
    }

};