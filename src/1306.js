/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {

    const n = arr.length
    const visited = new Array(n).fill(0)
    let ans = false
    dfs(start)
    return ans
    function dfs(i) {
        if (i < 0 || i >= n) return
        if (visited[i]) return
        if (ans) return
        if (arr[i] === 0) {
            ans = true
            return
        }
        visited[i] = 1
        dfs(i - arr[i])
        dfs(i + arr[i])
    }
};
var arr = [4, 2, 3, 0, 3, 1, 2], start = 5
var ans = canReach(arr, start)
console.log(ans)