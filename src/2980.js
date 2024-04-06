/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        let a = nums[i]
        let prev = a
        for (let j = i + 1; j < n; ++j) {
            let b = nums[j]
            prev |= b
            if (prev % 2 === 0) return true
            if ((a | b) % 2 === 0) {
                return true
            }
        }
    }
    return false
};

var nums = [1, 2]
var ans = hasTrailingZeros(nums)
console.log(ans)