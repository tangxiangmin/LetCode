/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    var map = {};
    for (var i = 0; i < nums.length - 1; ++i) {
        var sum = nums[i] + nums[i + 1];
        if (!map[sum]) {
            map[sum] = true;
        } else {
            return true;
        }
    }
    return false;
};

var nums = [4, 2, 4];

var ans = findSubarrays(nums);
console.log(ans);
