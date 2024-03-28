/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    nums.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    let [start, end] = nums[0]
    let ans = 0
    for (let i = 1; i < nums.length; ++i) {
        const [l, r] = nums[i]
        if (end < l) {
            ans += end - start + 1
            start = l
            end = Math.max(end, r)
        } else {
            end = Math.max(end, r)
        }
    }
    return ans + end - start + 1
};

// 差分数组 https://leetcode.cn/circle/discuss/FfMCgb/
var numberOfPoints = function (nums) {

}

var nums = [[1, 5], [3, 6], [4, 7]]
nums = [[1, 3], [5, 8]]
nums = [[3, 8], [4, 4], [9, 10], [9, 10]]
nums = [[2, 3], [3, 9], [4, 10], [5, 7], [9, 10]]
var ans = numberOfPoints(nums)
console.log(ans)