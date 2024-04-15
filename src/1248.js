/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 滑动窗口，l表示窗口中第一个奇数的位置，r表示窗口中最后一个奇数的位置，则当前窗口可以组成的组合为 l左侧的偶数 * r右侧的偶数
var numberOfSubarrays = function (nums, k) {
    const n = nums.length
    let cnt = 0
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        const num = nums[r]
        r++
        if (num % 2 == 1) {
            cnt++
        }
        let i = r
        while (nums[i] % 2 === 0 && i < n) {
            i++
        }

        while (cnt === k) {
            ans += 1 // 移动左边的位置
            ans += (i - r) // 右边可以构建的组合
            if (nums[l] % 2 === 1) {
                cnt--
            }
            l++
        }
    }
    return ans
};


var nums = [1, 1, 2, 1, 1], k = 3
// nums = [2, 4, 6], k = 1
nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], k = 2
var ans = numberOfSubarrays(nums, k)
console.log(ans)