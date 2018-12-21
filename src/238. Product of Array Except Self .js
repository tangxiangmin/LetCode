/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let total = nums.reduce((acc, item)=>{
        return acc * item
    })
    return nums.map(item=>{
        return total / item
    })
};