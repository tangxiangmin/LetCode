/**
 * @param {number[]} nums
 * @return {number}
 */
// BF
var minimumSum = function (nums) {
    const n = nums.length
    let min = Infinity
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            for (let k = j + 1; k < n; ++k) {
                if (nums[j] > nums[i] && nums[j] > nums[k]) {
                    min = Math.min(min, nums[i] + nums[j] + nums[k])
                }

            }
        }
    }
    return min === Infinity ? -1 : min
};
// 思路2：分别使用两个数组保存某个索引值左右的最小值，只要当前值比左右最小值大，就是一个符合条件的组合
var minimumSum = function (nums) {
    const n = nums.length
    let min = Infinity
    const left = new Array(nums)
    for (let i = 0; i < n; ++i) {
        min = Math.min(nums[i], min)
        left[i] = min
    }
    min = Infinity
    const right = new Array(nums)
    for (let i = n - 1; i >= 0; --i) {
        min = Math.min(nums[i], min)
        right[i] = min
    }

    let ans = Infinity
    for (let i = 0; i < n; ++i) {
        const l = left[i]
        const r = right[i]
        const cur = nums[i]
        if (cur > l && cur > r) {
            ans = Math.min(ans, l + cur + r)
        }
    }
    return ans === Infinity ? -1 : ans
}



var nums = [8, 6, 1, 5, 3]
// nums = [5, 4, 8, 7, 10, 2]
// nums = [6, 5, 4, 3, 4, 5]
var ans = minimumSum(nums)
console.log(ans)