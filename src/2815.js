/**
 * @param {number[]} nums
 * @return {number}
 */
// 依次记录每个元素数位最大值，保存在哈希表中，然后判断对应max有数字的话，计算最大和并更新数字
var maxSum = function (nums) {

    const arr = new Array(10).fill(0)
    let ans = -1
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i]

        const max = Math.max(...num.toString())
        if (arr[max]) {
            ans = Math.max(ans, num + arr[max])
            arr[max] = Math.max(num, arr[max])
        } else {
            arr[max] = num
        }
    }
    return ans
};
var nums = [51, 71, 17, 24, 42]
nums = [1, 2, 3, 4]
var ans = maxSum(nums)
console.log(ans)