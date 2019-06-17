/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = Math.max.apply(null, nums);

    var idx = -1;
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (num === max) {
            idx = i;
            continue;
        } else if (num === 0) {
            continue;
        } else if (max / num < 2) {
            return -1;
        }
    }
    return idx;
};
