/**
 * Created by admin on 2017/10/1.
 */
// 给定一个未排序的数组，找到最长连续升序的子序长度

var findLengthOfLCIS = function(nums) {
    if(!nums.length){
        return 0
    }
    var max = 1,
        cur = 1;

    for(var i = 0; i < nums.length; ++i){
        if (nums[i+1] > nums[i]){
            cur++;
            if (cur > max){
                max = cur;
            }
        }else {
            cur = 1;
        }
    }

    return max;
};

var a = [1,3,5,4,7];
console.log(findLengthOfLCIS(a));