/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：类似于前缀和？
var minStartValue = function(nums) {
    var sum = 0
    var min = Infinity
    for(var num of nums){
        sum += num
        if(sum < min){
            min = sum
        }
    }
    return min >= 0 ? 1 : -min + 1
};
var nums = [-3,2,-3,4,2] 
nums = [1,2]
nums = [1,-2,-3]
var res = minStartValue(nums)
console.log(res)