/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {

    var prev = -1
    for(var i = 0; i < nums.length; ++i){
        if(nums[i] === 1){
            if(prev < 0) {
                prev = i
            }else {
                diff = i - prev - 1
                if(diff < k) return false
                prev = i
            }
        }
    }
    return true

};

var nums = [1,0,0,0,1,0,0,1], k = 2
nums = [1,0,0,1,0,1], k = 2
// nums = [1,1,1,1,1], k = 0
// nums = [0,1,0,1], k = 1
// nums = [1,0,0,0], k =1
var ans = kLengthApart(nums,k)

console.log(ans)