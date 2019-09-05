/**
 * @param {number[]} height
 * @return {number}
 * 思路：找到右侧第一个比当前元素大的元素
 */
var trap = function(height) {
    var stack = []
    var sum = 0
    for(var i = 0; i < height.length; ++i){
        var cur = height[i]
        if(!stack.length || stack[0] > cur){
            stack.push(cur)
        }else{
            var max = stack[0]
            for(var j = 0; j < stack.length; ++j){
                sum += max - stack[j]
            }
            stack = [cur]
        }
    }
    // 处理剩余的stack
    if(stack.length > 1){
        sum += trap(stack.reverse())
    }

    return sum
};

var arr =  [0,1,0,2,1,0,1,3,2,1,2,1]
var res = trap(arr) // 6
console.log(res)

// 1,0,2
// 2,1,0,1,3
// 3,2,1,2,1 //倒序使用递归处理