/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 明显会超时的BF
var getSumAbsoluteDifferences = function (nums) {
    const n = nums.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        let sum = 0
        for (let j = 0; j < n; ++j) {
            if (i === j) continue
            sum += Math.abs(nums[i] - nums[j])
        }
        ans[i] = sum
    }
    return ans
};

// hums是非递减有序的，可以所有元素和，然后减去当前数字
// [a,b,c,d] 
// sum = a + b + c + d
// ans[0] = b-a + c-a + d-a =>  b-a + c-a + d-a + a - a = (a+b+c+d) - 4*a
// ans[1] = b-a  + c-b + d-b =>b-a  + c-b + d-b + a  -a  => (a+b+c+d) - 2*(a+b)
// ans[2] = c-a + c-b => n* c - (a +b +c) => c*n - sum
var getSumAbsoluteDifferences = function (nums) {
    const prefixSum = [nums[0]]
    const n = nums.length
    for (let i = 1; i < n; ++i) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }

    const ans = []
    for (let i = 0; i < n; ++i) {
        ans[i] = (i + 1) * nums[i] - prefixSum[i] + prefixSum[nums.length - 1] - prefixSum[i] - nums[i] * (nums.length - 1 - i);
    }
    return ans

}
var nums = [2, 3, 5]
// nums = [1, 4, 6, 8, 10]
var ans = getSumAbsoluteDifferences(nums)
console.log(ans)
