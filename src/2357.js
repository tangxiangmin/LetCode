/**
 * @param {number[]} nums
 * @return {number}
 */
// 看起来好像是个前缀和
var minimumOperations = function (nums) {
    nums.sort((a, b) => a - b);
    var preSum = 0;
    var ans = 0;
    for (var num of nums) {
        if (num - preSum <= 0) continue;
        ans++;
        preSum = num;
    }
    return ans;
};

var nums = [1, 5, 0, 3, 5]; // [0,1,3,5,5] // 1 + 3
// nums = [0]
nums = [1,5,0,3,5,8] // [0,1,3,5,5,8] // 1、2、2
var ans = minimumOperations(nums);
console.log(ans);
