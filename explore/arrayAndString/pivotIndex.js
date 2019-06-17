/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0
    var len = nums.length

    for (var i = 0; i < len; ++i) {
        sum += nums[i];
    }

    var l = 0, r = sum - nums[0]
    for(var i = 0; i < len; ++i){
        if(l === r){
            return i
        }else {
            l += nums[i];
            if(nums[i+1]){
                r -= nums[i + 1];
            }
        }
    }
    return -1
};

var arr = [1, 7, 3, 6, 5, 6];
arr = [-1, -1, -1, 0, 1, 1];
console.log(pivotIndex(arr));
