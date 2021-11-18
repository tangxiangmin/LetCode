/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    var l = start;
    var r = start;
    while (l >= 0 || r < nums.length) {
        if (l >= 0 && nums[l] === target) {
            return start - l;
        }
        if (r < nums.length && nums[r] === target) {
            return r - start;
        }
        l--;
        r++;
    }
};

var nums = [1, 2, 3, 4, 5],
    target = 5,
    start = 3;
var ans = getMinDistance(nums, target, start);
console.log(ans);
