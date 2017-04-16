/**
 * Created by admin on 2017/4/14.
 */

// 给一个连续的0~n数组找到断层的数
var missingNumber = function(nums) {
    nums.sort((a,b)=>{return a-b;});
    for (var i = 0, len = nums.length; i < len; ++i){
        if (nums[i] !== i){
            return i;
        }
    }
    return nums.length;
};

var test = [0, 2];
console.log(missingNumber(test));