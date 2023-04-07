/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    var buket = new Array(101).fill(0)

    for(var num of nums){
        buket[num]++
    }

    var pair = 0
    var left = 0
    for(var val of buket){
        if(val === 0) continue
        pair += Math.floor(val /2)
        if(val % 2){
            left++
        }
    }
    return [pair, left]
};

var nums = [1,3,2,1,3,2,2]
nums = [1,1]
nums = [0]
nums = [66,73,100,14,42]
var ans = numberOfPairs(nums)
console.log(ans)