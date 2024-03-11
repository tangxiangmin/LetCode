/**
 * @param {number[]} T
 * @return {number[]}
 * 解法：暴力
 */
var dailyTemperatures = function (T) {
    let res = []
    for (let i = 0; i < T.length; ++i) {
        let count = 0
        for (let j = i; j < T.length; ++j) {
            if (T[j] <= T[i]) {
                count++
            } else {
                break
            }
        }
        if (count === T.length - i) {
            count = 0
        }
        res.push(count)
    }
    return res
};

// 单调栈
var dailyTemperatures = function (T) {
    T.reverse()
    var stack = []
    var ans = []

    for (var i = 0; i < T.length; ++i) {
        // 维护递增栈，注意此处栈内保存的是索引值而不是具体的温度
        while (stack.length && T[stack[stack.length - 1]] <= T[i]) {
            stack.pop()
        }
        if (stack.length) {
            // 左侧栈中的元素都比当前元素值大，最近一天则取栈顶元素即可
            ans[i] = i - stack[stack.length - 1]
        } else {
            ans[i] = 0
        }
        stack.push(i)
    }

    return ans.reverse()
};
// 不需要翻转的单调栈
var dailyTemperatures = function (T) {
    var ans = new Array(T.length).fill(0)
    var stack = []
    for (var i = 0; i < T.length; ++i) {
        // 当碰到一个大于栈顶的元素时，则该元素一定是离栈顶元素最近的那个最大值的点
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            var cur = stack.pop()
            ans[cur] = i - cur
        }
        stack.push(i)
    }
    return ans
}

var dailyTemperatures = function (temperatures) {
    var stack = []
    var ans = []
    for (let i = temperatures.length - 1; i >= 0; --i) {
        var cur = temperatures[i]
        while (stack.length && temperatures[stack[stack.length - 1]] <= cur) {
            stack.pop()
        }
        ans[i] = stack.length ? stack[stack.length - 1] - i : 0
        stack.push(i)
    }
    return ans
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
temperatures = [30, 40, 50, 60]
temperatures = [30, 60, 90]

var res = dailyTemperatures(temperatures)
console.log(res)