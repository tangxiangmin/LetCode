/**
 * Created by admin on 2017/4/20.
 */
// 在一个升序的数组中找到参数的位置，如果不存在则找到应该插入的位置
var searchInsert = function(nums, target) {
    var i = 0,
        len = nums.length;
    for (; i < len; ++i){
        if (target <= nums[i]){
            return i;
        }
    }
    return len;
};