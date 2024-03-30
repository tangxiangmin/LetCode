/**
 * @param {number[]} nums
 * @return {number}
 */
// 按顺序删除，模拟
var maxOperations = function (nums) {
    const n = nums.length
    let ans = 1
    const sum = nums[0] + nums[1]
    for (let i = 2; i < n; i += 2) {
        const cur = nums[i]
        if (i + 1 === n) break
        const next = nums[i + 1]

        if (sum === cur + next) {
            ans++
        } else {
            break
        }
    }
    return ans
};

nums = [2, 2, 3, 2, 4, 2, 3, 3, 1, 3]
var ans = maxOperations(nums)
console.log(ans)