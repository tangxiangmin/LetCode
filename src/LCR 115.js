/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
// 相邻数字模拟成边，使用拓扑排序
var sequenceReconstruction = function (nums, sequences) {
    const n = nums.length
    const g = new Array(n + 1).fill(0).map(() => new Array())
    const inDegrees = new Array(n + 1).fill(0)
    for (const arr of sequences) {
        for (let i = 0; i < arr.length - 1; ++i) {
            g[arr[i]].push(arr[i + 1])
            inDegrees[arr[i + 1]]++
        }
    }
    const queue = []
    for (let i = 1; i <= n; ++i) {
        if (inDegrees[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        if (queue.length > 1) return false
        const node = queue.shift()
        for (const next of g[node]) {
            inDegrees[next]--
            if (inDegrees[next] === 0) {
                queue.push(next)
            }
        }
    }
    return true
};
var nums = [1, 2, 3], sequences = [[1, 2], [1, 3]]
nums = [1, 2, 3], sequences = [[1, 2]]
nums = [1, 2, 3], sequences = [[1, 2], [1, 3], [2, 3]]
var ans = sequenceReconstruction(nums, sequences)
console.log(ans)