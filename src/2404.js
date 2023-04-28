
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    var map = {}
    var max = 0
    var ans = -1
    for(var num of nums){
        if(num % 2) continue
        if(!map[num]) map[num] = 0
        map[num]++
        if(max < map[num]){
            max = map[num]
            ans = num
        }else if(max === map[num]){
            ans = Math.min(ans, num)
        }
    }
    return ans
};

var nums = [0,1,2,2,4,4,1]
nums = [4,4,4,9,2,4]
nums = [29,47,21,41,13,37,25,7]
var ans = mostFrequentEven(nums)

console.log(ans)