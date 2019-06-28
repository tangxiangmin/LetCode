/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hash = new Set()
    for(var val of nums){
        if(!hash.has(val)){
            hash.add(val)
        }else {
            hash.delete(val)
        }
    }

    var ans
    hash.forEach(key=>{
        ans = key
    })
    return ans
};
