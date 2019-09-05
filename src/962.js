/**
 * @param {number[]} A
 * @return {number}
 * 解法：单调栈
 * 可以把题意修改为找到右侧最远的一个比当前元素更大的元素
 * 通过单调递减栈记录
 */
var maxWidthRamp = function (A) {
    var stack = []
    for(var i = 0; i < A.length; ++i){
        if(!stack.length || A[stack[stack.length - 1]] > A[i]){
            stack.push(i)
        }
    }

    console.log(stack)
    var ans = 0
    for(var i = A.length - 1; i >=0; --i){
        while(stack.length && A[stack[stack.length - 1]] <= A[i]){
            ans = Math.max(i - stack.pop(), ans)
        }
    }
    return ans
};

var arr = [6, 0, 8, 2, 1, 5]
var res = maxWidthRamp(arr)
console.log(res)

// 递增栈
// 5 
// 5, 1
// 5,2
// 8
// 8, 0
// 8, 6

// 递减栈
// 5
// 1,
// 1, 2
// 1, 2, 8
// 0
// 0, 6
