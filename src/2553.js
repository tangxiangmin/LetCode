/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    var ans = []
    for(var num of nums){
        var chars = num.toString().split('').map(ch=>Number(ch))
        ans = ans.concat(chars)
    }
    return ans
};

var nums = [13,25,83,77]
var ans = separateDigits(nums)
console.log(ans)