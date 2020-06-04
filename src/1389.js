/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    var target = [];
    for (var i in index) {
        var idx = index[i];
        var val = nums[i];
        target.splice(idx, 0, val);
    }
    return target;
};
