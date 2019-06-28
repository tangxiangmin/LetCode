/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = new Set()
    for(var val of nums){
        if(hash.has(val)){
            return true
        }
        hash.add(val)
    }
    return false
};
