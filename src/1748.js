const { firebrick } = require("color-name");

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    var map = {};
    var ans = 0;
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (!map[num]) {
            map[num] = 1;
            ans += num;
        } else if (map[num] !== -1) {
            map[num] = -1;
            ans -= num;
        }
    }
    return ans
};

var nums = [1,2,3,2]
nums = [1,1,1,1,1]
nums = [1,2,3,4,5]
var ans = sumOfUnique(nums)
console.log(ans)