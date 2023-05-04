/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    var sum = 0
    var count = 0
    for(var num of nums){
        if(num % 2 ===0 && num % 3 === 0){
            sum += num
            count++
        }
    }
    return count ? Math.floor(sum / count) : 0
};

var nums = [1,3,6,10,12,15]
nums = [1,2,4,7,10]
nums = [4,4,9,10]
var ans = averageValue(nums)
console.log(ans)