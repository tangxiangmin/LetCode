/**
 * @param {number[]} hours
 * @return {number}
 * 思路：前缀和+单调栈
 */
var longestWPI = function(hours) {
    // 题目转换为：求score中和大于0的连续子数组的最大长度
    var score = hours.map(item=>{
        return item > 8 ? 1 : -1
    })
    // 使用前缀和
    var presum = [0]
    score.forEach((item, index)=>{
        presum.push(presum[index] + item)
    })
    // 题目转换为求：presum 中两个索引 i 和 j，使 j - i 最大，且保证 presum[j] - presum[i] > 0(表示i,j区间的元素和大于0)， 此时与962问题：最长坡类似
    var stack = []
    for(var i = 0; i < presum.length; ++i){
        if(!stack.length || presum[stack[stack.length - 1]] > presum[i]){
            stack.push(i)
        }
    }
    var ans = 0
    for(var i = presum.length-1; i >=0; --i){
        while(stack.length && presum[stack[stack.length - 1]] < presum[i]){
            ans = Math.max(ans, i - stack.pop())
        }
    }
    return ans
};

var arr = [9,9,6,0,6,6,9]
var res = longestWPI(arr)
// presum [0, 1, 2, 1, 0, -1, -2, -1]
// statck [0, -1, -2]->[0, 5, 6]
console.log(presum)

console.log(res)