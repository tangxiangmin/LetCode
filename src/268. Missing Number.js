/**
 * Created by admin on 2017/4/14.
 */

// 给一个连续的0~n数组找到断层的数
var missingNumber = function(nums) {
    nums.sort();

    for (var i = 0, len = nums; i < len; ++i){
        if (nums[i] !== i){
            return i;
        }
    }
    return nums.length;
};
