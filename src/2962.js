/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 找到每个符合题目要求的子数组[l,r]，可以组成的子数组中类就是l-0 + n-r-1
var countSubarrays = function (nums, k) {
    const target = Math.max(...nums)

    let cnt = 0
    let l = 0
    let ans = 0
    for (const num of nums) {
        if (num === target) {
            cnt++
        }

        while (cnt === k) {
            if (nums[l] === target) {
                cnt--
            }

            l++
        }
        ans += l
    }

    return ans
};
var nums = [1, 3, 2, 3, 3], k = 2
// nums = [1, 4, 2, 1], k = 3
nums = [61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58, 42, 82, 10, 82, 78, 15, 82], k = 2 // 224
var ans = countSubarrays(nums, k)
console.log(ans)