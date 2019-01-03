/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let len = nums.length
    let max = 0
    for(let i = 0; i <  len; ++i){
        for(let j = i + 1; j < len; ++j){
            max = Math.max(max, nums[i] ^ nums[j])
        }
    }
    return max
};