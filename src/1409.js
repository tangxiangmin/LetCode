/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
// 这道题应该可以不借助splice，优化代码
var processQueries = function (queries, m) {
    const arr = new Array(m)
    for (let i = 0; i < m; ++i) {
        arr[i] = i + 1
    }
    return queries.map(v => {
        const idx = arr.indexOf(v)
        arr.splice(idx, 1)
        arr.unshift(v)
        return idx
    })
};

var queries = [3, 1, 2, 1], m = 5
queries = [7, 5, 5, 8, 3], m = 8
var ans = processQueries(queries, m)
console.log(ans)