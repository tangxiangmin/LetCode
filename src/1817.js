/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    const map = {}
    for (const [id, t] of logs) {
        if (!map[id]) {
            map[id] = new Set()
        }
        map[id].add(t)
    }
    const ans = new Array(k + 1).fill(0)
    for (const id in map) {
        const val = map[id].size
        if (!ans[val]) ans[val] = 0
        ans[val]++
    }
    // 索引值从1开始
    return ans.slice(1)
};
var logs = [[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], k = 5
var ans = findingUsersActiveMinutes(logs, k)
console.log(ans)