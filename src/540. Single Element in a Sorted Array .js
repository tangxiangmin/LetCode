/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let i 
    for (i = 0; i < nums.length - 1; i += 2){
        if(nums[i] !== nums[i+1]){
            break
        }
    }
    return nums[i]
};
singleNonDuplicate([1,1,2])