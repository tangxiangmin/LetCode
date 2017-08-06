/**
 * Created by admin on 2017/7/9.
 */
// 给定一个数组和一个目标值，返回两个元素之和为目标值的元素索引值
// 可以假设有且只有一个答案
var twoSum = function(nums, target) {
    // bf
    // for (var i = 0, len = nums.length; i < len-1; ++i){
    //     for (var j = i + 1; j < len; ++j){
    //         if (nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }
    // }

    var hash = {},
        len = nums.length;

    for (var i = 0; i < len; ++i){
        hash[target-nums[i]] = i;
    }

    for (var i = 0; i < len; ++i){
        var key = nums[i];
        if (hash[key] && hash[key] != i ){
            return [i, hash[key]];
        }
    }

};

var test = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(test, target));