/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    const mod = 1000000007
    const n = nums.length
    let sum = 0
    for (let i = 0; i < n; ++i) {
        const set = new Set()
        for (let j = i; j < n; ++j) {
            set.add(nums[j])
            const v = set.size
            sum += v * v
        }
    }
    return sum % mod
};
var nums = [1, 2, 1]
nums = [2,2]
var ans = sumCounts(nums)
console.log(ans)