/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let hash = {}
    let res = []
    for(let i = 0; i < nums.length; ++i) {
        let key = nums[i]
        if(!hash[key]){
            hash[key] = true
        }else {
            res.push(key)
        }
    }
    return res
};