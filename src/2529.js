/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    var pos = 0;
    var neg = 0;
    for (var num of nums) {
        if (num < 0) neg++;
        else if (num > 0) pos++;
    }
    return Math.max(pos, neg);
};

var nums = [-2, -1, -1, 1, 2, 3];
var ans = maximumCount(nums);

console.log(ans)