/**
 * Created by admin on 2017/4/20.
 */
// 在一个升序的数组中找到参数的位置，如果不存在则找到应该插入的位置
var searchInsert = function (nums, target) {
    var i = 0,
        len = nums.length;
    for (; i < len; ++i) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return len;
};
var searchInsert = function (nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            return m;
        } else if (nums[m] > target) {
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        }
    }
    return l;
};
var nums = [1, 3, 5, 6],
    target = 2;
(nums = [1, 3, 5, 6]), (target = 5);
var ans = searchInsert(nums, target);
console.log(ans);
