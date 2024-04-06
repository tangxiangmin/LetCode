/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {

    let ans = 0
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        const s = i.toString(2)
        let cnt = 0
        for (const ch of s) {
            if (ch === '1') cnt++
            if (cnt > k) break
        }
        if (cnt === k) {
            ans += nums[i]
        }
    }
    return ans

};
var nums = [5, 10, 1, 5, 2], k = 1
var ans = sumIndicesWithKSetBits(nums, k)
console.log(ans)