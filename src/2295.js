/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
// 直接使用indexOf回超时
var arrayChange = function (nums, operations) {
    const cache = {}
    nums.forEach((val, i) => {
        cache[val] = i
    })
    for (const [x, v] of operations) {
        const i = cache[x]
        nums[i] = v
        cache[v] = i
    }
    return nums
};
var nums = [1, 2, 4, 6], operations = [[1, 3], [4, 7], [6, 1]]
var ans = arrayChange(nums, operations)
console.log(ans)