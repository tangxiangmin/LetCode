/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
var nextGreaterElements = function(nums) {
    let res = []
    for(let i = 0; i < nums.length; ++i){
        let cur = nums[i]
        let j = i+1;
        for(; j < nums.length; ++j){
            if(nums[j] > cur){
                res[i] = nums[j]
                break
            }
        }
        if(j == nums.length){
            j = 0
            for (; j < i; ++j) {
                if (nums[j] > cur) {
                    res[i] = nums[j]
                    break
                }
            }
            if (j == i) {
                res[i] = -1
            }
        }
       
    }
    return res
};

// 运用递增栈，先正向，然后再循环从头取一次
var nextGreaterElements = function (nums) {

    function nextGreaterElement(nums, fill) {
        var stack = []
        var ans = []
        for (var i = nums.length - 1; i >= 0; --i) {
            var cur = nums[i]
            while (stack.length && top(stack) <= cur) {
                stack.pop()
            }
            ans[i] = stack.length ? top(stack) : fill

            stack.push(cur)
        }
        return ans
    }

    var forward = nextGreaterElement(nums, undefined)
    // forward从某个位置开始后续的值都是-1
    var i = 0
    for (;i < forward.length; ++i) {
        if (forward[i] === undefined) {
            forward[i] = -1
            break
        }
    }
    
    var newNums = nums.slice(i + 1)
    var len = newNums.length
    if (newNums.length) {
        var backward = nextGreaterElement(newNums.concat(nums.slice(0, i+1)), -1)
        for (var j = 0; j < len; ++j) {
            forward[i + 1 + j] = backward[j]
        }
    }

    return forward

    function top(arr) {
        return arr[arr.length - 1]
    }
};

var nums = [1, 2, 1, 3, 2] // 循环数组，最后一个元素的下一个元素是数组的第一个元素
nums = [ 2, 1, 2, 1, 3 ]

nums = [-1,-2,-1,2,2,1,1]
var res = nextGreaterElements(nums)
console.log(res) 