/**
 * Created by admin on 2017/7/9.
 */
// 给定一个数组和一个目标值，返回两个元素之和为目标值的元素索引值
// 可以假设有且只有一个答案
var twoSum = function (nums, target) {
    var hash = {},
        len = nums.length;

    for (var i = 0; i < len; ++i) {
        hash[target - nums[i]] = i;
    }

    for (var i = 0; i < len; ++i) {
        var key = nums[i];
        if (hash[key] && hash[key] != i) {
            return [i, hash[key]];
        }
    }

};

// 如果返回的是值，可以使用双指针，由于本题要求返回索引值，因此使用hash更合适
var twoSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    var l = 0
    var r = nums.length - 1
    while (l < r) {
        var sum = nums[l] + nums[r]
        if (sum < target) {
            l++
        } else if (sum > target) {
            r--
        } else {
            return [l, r]
        }
    }
    return [-1, -1]
}
var nums = [2, 7, 11, 15], target = 9;
nums = [3, 2, 4], target = 6 //[1,2]
console.log(twoSum(nums, target)); 