/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    var len = nums.length;
    for (var i = 0; i < len; ++i) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }
    return -1;
};
