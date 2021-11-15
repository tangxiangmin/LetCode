/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
    }
    return count <= 1;
};
