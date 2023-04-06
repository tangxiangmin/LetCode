/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
    if (nums.length === 1) return nums[0];
    var len = nums.length / 2;
    var list = [];
    for (var i = 0; i < len; ++i) {
        if (i % 2) {
            list[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        } else {
            list[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        }
    }
    return minMaxGame(list)
};

var nums = [1, 3, 5, 2, 4, 8, 2, 2];
var ans = minMaxGame(nums);
console.log(ans);
