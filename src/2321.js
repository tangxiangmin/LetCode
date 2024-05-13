/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 试试前缀和，然后枚举所有情况
// 会超时
var maximumsSplicedArray = function (nums1, nums2) {
    const n = nums1.length

    const arr1 = getPreSums(nums1)
    const arr2 = getPreSums(nums2)

    console.log(arr1)
    console.log(arr2)

    const a = arr1[n - 1]
    const b = arr2[n - 1]

    let ans = Math.max(a, b)
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            // 交换i到j的子数组
            const v1 = arr1[j] - (i == 0 ? 0 : arr1[i - 1])
            const v2 = arr2[j] - (i == 0 ? 0 : arr2[i - 1])
            ans = Math.max(ans, a - v1 + v2, b - v2 + v1)
        }
    }
    return ans

    function getPreSums(nums) {
        const list = [nums[0]]
        for (let i = 1; i < n; ++i) {
            list[i] = nums[i] + list[i - 1]
        }
        return list
    }
};
// 思路应该是田忌赛马，从sum更小的那个数组中，取出局部和最大的子数组给另外的上等马
// 参考题解的dp
var maximumsSplicedArray = function (nums1, nums2) {
    return Math.max(solve(nums1, nums2), solve(nums2, nums1))

    function solve(nums1, nums2) {
        let s1 = 0 // s1的数组和
        let maxSum = 0
        const dp = [] // 最大子数组和，这个子数组是nums2[i] - nums1[i] 映射成的子数组
        // let s = 0 
        for (let i = 0; i < nums1.length; ++i) {
            s1 += nums1[i];
            dp[i] = nums2[i] - nums1[i] + Math.max(i == 0 ? 0 : dp[i - 1], 0)
            // s = Math.max(s + nums2[i] - nums1[i], 0);
            maxSum = Math.max(maxSum, dp[i]);
        }
        return s1 + maxSum;
    }
}


var nums1 = [60, 60, 60], nums2 = [10, 90, 10]
nums1 = [20, 40, 20, 70, 30], nums2 = [50, 20, 50, 40, 20]
var ans = maximumsSplicedArray(nums1, nums2)
console.log(ans)