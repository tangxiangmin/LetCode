/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 下面这个用哈希会超时
var purchasePlans = function (nums, target) {
    const map = {}
    let ans = 0
    for (const num of nums) {
        if (num >= target) continue
        const left = target - num
        for (let i = 1; i <= left; i++) {
            if (map[i]) {
                ans += map[i]
            }
        }
        if (!map[num]) map[num] = 0

        map[num]++
    }
    return ans
};

// 可以先拍个序，然后双指针
var purchasePlans = function (nums, target) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let l = 0
    let r = n - 1
    let ans = 0
    while (l < r) {
        if (nums[l] + nums[r] > target) {
            r--
        } else {
            ans += r - l
            l++
        }

    }
    return ans % 1000000007;

}

var nums = [2, 5, 3, 5], target = 6
nums = [2, 2, 1, 9], target = 10
var ans = purchasePlans(nums, target)
console.log(ans)