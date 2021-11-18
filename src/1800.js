/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    var len = nums.length;
    var fast = 1;
    var sum = nums[0];
    var ans = sum;

    while (fast < len) {
        if (nums[fast] <= nums[fast - 1]) {
            ans = Math.max(sum, ans);
            sum = nums[fast];
        } else {
            sum += nums[fast];
        }
        fast++;
    }
    ans = Math.max(sum, ans);
    return ans;
};

var nums = [10, 20, 30, 5, 10, 50];
nums = [10, 20, 30, 40, 50];
// nums = [12, 17, 15, 13, 10, 11, 12];
var ans = maxAscendingSum(nums);
console.log(ans);
