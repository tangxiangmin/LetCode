/**
 * @param {number[]} nums
 * @return {number}
 */
// BF，显然会超时
var sumDigitDifferences = function (nums) {

    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            ans += calc(nums[i].toString(), nums[j].toString())
        }
    }
    return ans

};


function calc(a, b) {
    const len = a.length
    let cnt = 0
    for (let i = 0; i < len; ++i) {
        cnt += a[i] === b[i] ? 0 : 1
    }
    return cnt
}

var nums = [13, 23, 12]
var ans = sumDigitDifferences(nums)
console.log(ans)