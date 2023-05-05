/**
 * @param {number[]} nums
 * @return {number}
 */

var findTheArrayConcVal = function (nums) {
    var ans = 0;
    var l = 0;
    var r = nums.length - 1;
    while (l < r) {
        ans += Number(`${nums[l]}${nums[r]}`);
        l++;
        r--;
    }
    if (l == r) {
        ans += nums[l];
    }
    return ans;
};

var nums = [7, 52, 2, 4];
nums = [5, 14, 13, 8, 12];
var ans = findTheArrayConcVal(nums);
console.log(ans);
