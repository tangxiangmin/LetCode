/**
 * @param {number[]} nums
 * @return {boolean}
 * 动态规划
 */
var canJump = function (nums) {
    var memo = {} // 记录某个位置是否可以到末尾点
    var len = nums.length
    memo[len-1] = true
    for(var i = len - 2; i >= 0; --i){
        var cur = nums[i]
        memo[i] = false
        for(var j = 1; j <= cur; ++j){
            // 只要当前元素能到达的位置中有一个能到达末尾，则当前元素可到达末尾
            if(memo[j+i]){
                memo[i] = true
                break
            }
        }
    }
    return memo[0]
};

var arr = [2, 3, 1, 1, 4] // true
// arr = [3, 2, 1, 0, 4] // false
arr = [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]
var res = canJump(arr)
console.log(res)

