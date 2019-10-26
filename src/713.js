/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力解法，貌似会超时
var numSubarrayProductLessThanK = function (nums, k) {
    var l = 0
    var r = 0
    var len = nums.length
    var ans = 0
    var product = 1
    while (l <= r && r < len) {
        while ((product *= nums[r]) < k) {
            ans++
            r++
        }
        product = 1
        l++
        r = l
    }
    return ans
};

var nums = [10, 5, 2, 6], k = 100
var res = numSubarrayProductLessThanK(nums, k)
console.log(res)

// 10 l=0, r=0
// 10,5 l=0,r=1
// 10,5,2 >= 100, l=1, r= 2, product = 10