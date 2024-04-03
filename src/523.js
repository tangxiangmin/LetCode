/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 下面这个O(n^2)会超时
var checkSubarraySum = function (nums, k) {
    let prevSum = [0]
    const n = nums.length

    let sum = 0
    for (let i = 0; i < n; ++i) {
        sum += nums[i]
        prevSum[i + 1] = sum
    }


    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            const val = prevSum[j + 1] - prevSum[i]
            if (val % k === 0) {
                return true
            }
        }
    }
    return false
};
// 实际上只需要遍历一次，因此两个坐标对应的前缀和 % k 的余数应该相同，这样相减直接就是0
var checkSubarraySum = function (nums, k) {
    const n = nums.length
    if (n < 2) return false

    let sum = 0

    const map = new Map()
    map.set(0, -1); // 记录第0个索引
    for (let i = 0; i < n; ++i) {
        sum += nums[i]
        // sum = (sum + nums[i]) % k
        const v = sum % k
        if (map.has(v)) {
            const prevIndex = map.get(v)
            if (i - prevIndex >= 2) {
                return true
            }
        } else {
            map.set(v, i)
        }
    }
    return false
};

var nums = [23, 2, 4, 6, 7], k = 6
nums = [23, 2, 6, 4, 7], k = 6
// nums = [23, 2, 6, 4, 7], k = 13
nums = [23, 2, 4, 6, 6], k = 7
var ans = checkSubarraySum(nums, k)
console.log(ans)