/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let hash = {}
    for(let i = 0; i < nums.length; ++i) {
        let key = nums[i]
        if(hash[key]){
            delete hash[key]
        }else {
            hash[key] = true
        }
    }
    return Object.keys(hash)
};