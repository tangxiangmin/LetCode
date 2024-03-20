/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n - 1; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (nums[i] + nums[j] < target) {
                ans++
            }
        }
    }
    return ans
};
// 因为 0 <= i < j < n ，，求i和j的组合，因此可以直接排序，因为组合数量不受顺序限制
var countPairs = function (nums, target) {
    nums.sort((a, b) => a - b)
    let l = 0
    let r = nums.length - 1
    let ans = 0
    while (l < r) {
        if (nums[l] + nums[r] < target) {
            // l到r-1范围内的元素都比nums[r]小，因此可以直接加
            ans += r - l
            l++
        } else {
            r--
        }
    }
    return ans
}