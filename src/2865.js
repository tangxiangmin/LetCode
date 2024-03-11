/**
 * @param {number[]} maxHeights
 * @return {number}
 */
// 题目要求
// 创建的heghts存在一个山顶，左边递增，右边递减
// heights[i] <= maxHeights[i]
// 思路1：BF，依次将每个索引值作为峰顶构建
var maximumSumOfHeights = function (maxHeights) {
    let ans = 0
    for (let i = 0; i < maxHeights.length; ++i) {
        ans = Math.max(ans, build(i))
    }
    return ans

    function build(index) {
        var val = maxHeights[index]
        let sum = val
        let prev = val
        for (let i = index - 1; i >= 0; --i) {
            prev = Math.min(prev, maxHeights[i])
            sum += prev
        }
        prev = val
        for (let i = index + 1; i < maxHeights.length; ++i) {
            prev = Math.min(prev, maxHeights[i])
            sum += prev
        }
        return sum
    }
};
// 思路2：要求数组的左侧构成非递减，右侧构成非递增，看起来可以用两个从左向右的单调栈来实现，一个递增对应左边，一个递减对应右边
// 下面是官方题解，待自己实现一下
var maximumSumOfHeights = function (maxHeights) {
    const n = maxHeights.length;
    const prefix = new Array(n).fill(0);
    const suffix = new Array(n).fill(0);
    const stack1 = [];
    const stack2 = [];
    for (let i = 0; i < n; i++) {
        // 从左向右递减栈
        while (stack1.length > 0 && maxHeights[i] < maxHeights[stack1[stack1.length - 1]]) {
            stack1.pop();
        }
        if (stack1.length == 0) {
            prefix[i] = (i + 1) * maxHeights[i]; // 所有元素都跟maxHeights[i]一样，因此是i+1个
        } else {
            let last = stack1[stack1.length - 1];
            prefix[i] = prefix[last] + (i - last) * maxHeights[i]
        }
        stack1.push(i);
    }


    let res = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack2.length && maxHeights[i] < maxHeights[stack2[stack2.length - 1]]) {
            stack2.pop();
        }
        if (stack2.length == 0) {
            suffix[i] = (n - i) * maxHeights[i];
        } else {
            last = stack2[stack2.length - 1];
            suffix[i] = suffix[last] + (last - i) * maxHeights[i];
        }
        stack2.push(i);
        res = Math.max(res, prefix[i] + suffix[i] - maxHeights[i])
    }
    return res;
};


var maxHeights = [5, 3, 4, 1, 1]
// maxHeights = [6, 5, 3, 9, 2, 7]
// maxHeights = [3, 2, 5, 5, 2, 3]
var ans = maximumSumOfHeights(maxHeights)
console.log(ans)