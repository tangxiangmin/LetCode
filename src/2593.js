/**
 * @param {number[]} nums
 * @return {number}
 */
// 可以用一个保存了每个元素索引的栈，然后按元素的大小排序，之后将标记的元素出栈
var findScore = function (nums) {
    const n = nums.length
    const stack = []
    for (let i = 0; i < n; ++i) {
        stack[i] = i
    }
    // 栈顶元素最小
    stack.sort((a, b) => {
        if (nums[a] === nums[b]) {
            return b - a
        }
        return nums[b] - nums[a]
    })

    let ans = 0
    const marked = new Array(n).fill(0)
    while (stack.length) {
        while (stack.length && marked[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (!stack.length) break
        const i = stack[stack.length - 1]
        marked[i] = 1
        ans += nums[i]
        if (i > 0) {
            marked[i - 1] = 1
        }
        if (i < n - 1) {
            marked[i + 1] = 1
        }
    }
    return ans
};
var nums = [2, 1, 3, 4, 5, 2]
nums = [2, 3, 5, 1, 3, 2]
nums = [5, 1, 1, 7, 2, 4] // 3
var ans = findScore(nums)
console.log(ans)