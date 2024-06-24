/**
 * @param {number[]} nums
 * @return {boolean}
 */
// bf 
var isIdealPermutation = function (nums) {
    const n = nums.length
    let a = 0
    let b = 0
    for (let i = 0; i < n; ++i) {
        if (i !== n - 1 && nums[i] > nums[i + 1]) {
            b++
        }
    }
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (nums[i] > nums[j]) {
                a++
                if (a > b) return false
            }
        }

    }
    return a === b
};

// 一个局部倒置一定是一个全局倒置，要让两个数量相等，如果存在nums[i] > nums[j] 且j > i + 1，则不相等，因此使用一个变量保存i+1之后的最小值

var isIdealPermutation = function (nums) {
    const n = nums.length
    let min = nums[n - 1]

    for (let i = n - 3; i >= 0; ++i) {
        if (nums[i] > min) return false
        min = Math.min(min, nums[i + 1])
    }
    return true
}