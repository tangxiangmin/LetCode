/**
 * @param {number[]} nums
 * @return {number}
 */
// 田忌赛马
// 对于每一个数字而言，使用刚好比他大一位的那个数字
var maximizeGreatness = function (nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let l = 0
    let r = 1
    let ans = 0
    while (r < n) {
        while (r < n && nums[r] === nums[l]) {
            r++
        }
        if (r === n) break
        ans++
        l++
        r++
    }
    return ans
};

var nums = [1, 3, 5, 2, 1, 3, 1]
nums = [1, 2, 3, 4]
nums = [26, 76, 24, 96, 82, 97, 97, 72]
var ans = maximizeGreatness(nums)
console.log(ans)