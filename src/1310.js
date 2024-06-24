/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const list = [arr[0]]
    const n = arr.length
    for (let i = 1; i < n; ++i) {
        list[i] = list[i - 1] ^ arr[i]
    }
    const ans = []
    for (const [l, r] of queries) {
        ans.push(list[r] ^ (l >= 1 ? list[l - 1] : 0))
    }
    return ans
};
var arr = [1, 3, 4, 8], queries = [[0, 1], [1, 2], [0, 3], [3, 3]]
var ans = xorQueries(arr, queries)
console.log(ans)