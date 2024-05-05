/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// 按对角线模拟，会超时
var findDiagonalOrder = function (nums) {
    const m = nums.length
    let n = 0
    for (let i = 0; i < m; ++i) {
        n = Math.max(nums[i].length, n)
    }

    const ans = []
    for (let i = 0; i < m; ++i) {
        dfs(i, 0)
    }
    for (let j = 1; j < n; ++j) {
        dfs(m - 1, j)
    }
    return ans

    function dfs(i, j) {

        while (i >= 0 && i < m && j < n) {
            if (j < nums[i].length) {
                ans.push(nums[i][j])
            }
            i -= 1
            j += 1
        }
    }
};
// 上面超时的原因是某个格子存在空缺，但还是要一步一步遍历，可以使用队列来处理，只保存下一轮要遍历的元素
var findDiagonalOrder = function (nums) {
    const m = nums.length
    const queue = [[0, 0]]
    let ans = []
    const used = {}
    while (queue.length) {
        const len = queue.length
        for (let k = 0; k < len; ++k) {
            const [i, j] = queue.shift()
            ans.push(nums[i][j])
            if (i + 1 < m) {
                enqueue(i + 1, j)
            }
            if (j + 1 < nums[i].length) {
                enqueue(i, j + 1)
            }
        }
    }

    return ans
    function enqueue(i, j) {
        const key = `${i},${j}`
        if (used[key]) return
        used[key] = 1
        queue.push([i, j])
    }
}
var nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var ans = findDiagonalOrder(nums)
console.log(ans)