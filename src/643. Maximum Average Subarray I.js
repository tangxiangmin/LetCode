/**
 * Created by admin on 2017/10/7.
 */
// 找到长度为k且和最大的连续子数组

    // 思路：BF，超时了
// 参考：滑窗算法
// var findMaxAverage = function (nums, k) {
//
//     var max = -Number.MAX_VALUE;
//     for (var i = 0; i <= nums.length - k; ++i) {
//         var sum = 0;
//         for (var j = i; j < i + k; ++j) {
//             sum += nums[j];
//         }
//         if (max < sum) {
//             max = sum;
//         }
//     }
//     return max / k;
// };
var findMaxAverage = function (nums, k) {
    var sum = 0 ;
    for (var i = 0; i < k; ++i){
        sum += nums[i];
    }
    var res = sum;
    for (var i = k; i < nums.length; ++i){
        sum += nums[i] - nums[i-k];
        res = Math.max(res, sum);
    }
    return res/k
}
var nums = [1, 12, -5, -6, 50, 3],
    k = 4;
console.log(findMaxAverage(nums, k));