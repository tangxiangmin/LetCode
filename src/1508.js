/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const arr = []
    for (let i = 0; i < n; ++i) {
        let sum = 0
        for (let j = i; j < n; ++j) {
            sum += nums[j]
            arr.push(sum)
        }
    }
    arr.sort((a, b) => a - b)
    let ans = 0
    for (let i = left - 1; i < right; ++i) {
        ans += arr[i]
    }
    return ans % 1000000007

};

var nums = [1, 2, 3, 4], n = 4, left = 1, right = 5
nums = [1,2,3,4], n = 4, left = 3, right = 4
nums = [1,2,3,4], n = 4, left = 1, right = 10
var ans = rangeSum(nums, n, left, right)
console.log(ans)