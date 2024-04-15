/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    const arr = new Array(2001).fill(0)
    const k = new Set(nums).size

    const n = nums.length

    let l = 0
    let r = 0
    let ans = 0
    let cnt = 0

    while (r < n) {
        const num = nums[r]
        if (arr[num] === 0) {
            cnt++
        }
        arr[num]++
        while (cnt === k) {
            ans += n - r
            const d = nums[l]
            l++
            arr[d]--
            if (arr[d] == 0) {
                cnt--
            }
        }
        r++
    }
    return ans
};

var nums = [1, 3, 1, 2, 2]
nums = [5, 5, 5, 5]
nums = [1469, 1469, 1790, 2000, 1740, 842, 273, 1790] //4
var ans = countCompleteSubarrays(nums)
console.log(ans)