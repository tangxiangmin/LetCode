/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let res = []
    for(let i = 0; i < nums.length; ++i){
        let cur = nums[i]
        let j = i+1;
        for(; j < nums.length; ++j){
            if(nums[j] > cur){
                res[i] = nums[j]
                break
            }
        }
        if(j == nums.length){
            j = 0
            for (; j < i; ++j) {
                if (nums[j] > cur) {
                    res[i] = nums[j]
                    break
                }
            }
            if (j == i) {
                res[i] = -1
            }
        }
       
    }
    return res
};
let res = nextGreaterElements([1, 2, 3, 4, 3])
console.log(res)