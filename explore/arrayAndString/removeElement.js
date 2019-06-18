/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0;
    for(var i = 0; i < nums.length; ++i){
        if(nums[i] !== val){
            nums[k] = nums[i]
            ++k
        }
    }
    return k
};
