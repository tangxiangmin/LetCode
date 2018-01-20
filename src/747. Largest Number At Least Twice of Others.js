// 判断数组中最大值是否至少比其他值大2倍

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = Math.max.apply(null, nums);
    var index = 0;
    for(var i = 0; i < nums.length; ++i){
        var item = nums[i];
        if (max == item){
            index = i;
            continue
        }else if (item !== 0 && max / item < 2) {
            return -1;
        }
    }   
    return index
    
};
