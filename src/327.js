/**
给定一个整数数组 nums 。区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

请你以下标 i （0 <= i <= nums.length ）为起点，元素个数逐次递增，计算子数组内的元素和。

当元素和落在范围 [lower, upper] （包含 lower 和 upper）之内时，记录子数组当前最末元素下标 j ，记作 有效 区间和 S(i, j) 。

求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 有效 区间和的个数。

注意：
最直观的算法复杂度是 O(n2) ，请在此基础上优化你的算法。

示例：

输入：nums = [-2,5,-1], lower = -2, upper = 2,
输出：3
解释：
下标 i = 0 时，子数组 [-2]、[-2,5]、[-2,5,-1]，对应元素和分别为 -2、3、2 ；其中 -2 和 2 落在范围 [lower = -2, upper = 2] 之间，因此记录有效区间和 S(0,0)，S(0,2) 。
下标 i = 1 时，子数组 [5]、[5,-1] ，元素和 5、4 ；没有满足题意的有效区间和。
下标 i = 2 时，子数组 [-1] ，元素和 -1 ；记录有效区间和 S(2,2) 。
故，共有 3 个有效区间和。
 

提示：

0 <= nums.length <= 10^4

 */
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// 思路1：BF
var countRangeSum = function (nums, lower, upper) {
    var ans = 0;
    for (var i = 0; i < nums.length; ++i) {
        var s = nums[i]; // S[i, j]
        if (s >= lower && s <= upper) {
            ans++;
        }
        for (var j = i + 1; j < nums.length; ++j) {
            s += nums[j];
            if (s >= lower && s <= upper) {
                ans++;
            }
        }
    }
    return ans;
};

// 思路2:前缀和...


var nums = [-2, 5, -1],
    lower = -2,
    upper = 2;
var res = countRangeSum(nums, lower, upper);
console.log(res);
