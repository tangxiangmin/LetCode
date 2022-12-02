/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);
    var list = [];
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] === target) {
            list.push(i);
        }
    }
    return list;
};

var nums = [1, 2, 5, 2, 3],
    target = 2;
var ans = targetIndices(nums, target);
console.log(ans);
