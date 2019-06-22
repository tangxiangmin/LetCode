/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length;
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j <= i + k; ++j) {
            if (j > len) {
                continue;
            }

            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};
var nums = [1, 2, 3, 1];
var k = 3;
var t = 0;

var res = containsNearbyAlmostDuplicate(nums, k, t);
console.log(res);
