/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 使用递增栈，栈中保留的都是比当前元素大的索引值，从右向左遍历，这样就可以知道下一个更大节点的索引值在栈顶，计算两个索引的距离即可
var dailyTemperatures = function (temperatures) {
    var stack = []
    let ans = []
    for (let i = temperatures.length - 1; i >= 0; --i) {
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop()
        }
        if (stack.length) {
            ans[i] = stack[stack.length - 1] - i
        } else {
            ans[i] = 0
        }
        stack.push(i)
    }
    return ans
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
var ans = dailyTemperatures(temperatures)
console.log(ans)