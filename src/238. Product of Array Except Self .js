/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 思路，先求得所有元素的乘积 product，对应output[i] = product /nums[i] 
var productExceptSelf = function (nums) {
    // 需要处理为0的情况
    var product = nums.reduce((acc, item) => acc * item, 1)
    return nums.map(item => product / item)
};

// 但是题目要求不能使用除法，因此可以通过左积乘以右积实现
var productExceptSelf = function (nums) {
    var len = nums.length
    var l_product = [1]
    for (var i = 1; i < len; ++i) {
        l_product[i] = l_product[i - 1] * nums[i - 1]
    }

    var r_product = []
    r_product[len - 1] = 1
    for (var i = len - 2; i >= 0; --i) {
        r_product[i] = r_product[i + 1] * nums[i + 1]
    }

    var ans = []
    for (var i = 0; i < len; ++i) {
        ans[i] = l_product[i] * r_product[i]
    }
    return ans
}
var nums = [1, 2, 3, 4]
var res = productExceptSelf(nums)
console.log(res)