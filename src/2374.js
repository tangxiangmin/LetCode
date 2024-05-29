/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    const n = edges.length
    const arr = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        const v = edges[i]
        arr[v] += i
    }
    let maxIdx = 0
    for (let i = 0; i < n; ++i) {
        if (arr[maxIdx] < arr[i]) {
            maxIdx = i
        }
    }
    return maxIdx
};

var edges = [1, 0, 0, 0, 0, 7, 7, 5]
var ans = edgeScore(edges)
console.log(ans)