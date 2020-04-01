/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路: 动态规划
// work[i] 表示第i天工作时的总预约时间
// rest[i] 表示第i天休息时的总预约时间
var massage = function(nums) {
    if(!nums.length) return 0
    
    var work = [nums[0]]
    var rest = [0]
    for(var i = 1; i < nums.length; ++i){
        work[i] = Math.max(work[i-1], nums[i] + rest[i-1])
        rest[i] = work[i-1]
    }
    return Math.max(...work, ...rest)
};

var nums = [1,2,3,1]
// work[i] = [1,1,1+3,1]
// work[0] = [1]
// rest[0] = [0]

// work[1] = max(work[1-1], 2 + rest[0]) = 2
// rest[1] = work[1-1] = 1

// work[2] =max(work[2-1], 3 + rest[1]) = 4
// rest[2] = work[2-1] = 2

nums = [2,7,9,3,1]
nums = [2,1,4,5,3,1,1,3]
var res = massage(nums)
console.log(res)