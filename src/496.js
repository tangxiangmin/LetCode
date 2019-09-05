/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路：从后向前构建递增栈
 */
var nextGreaterElement = function(nums1, nums2) {
    var stack = []

    var map = {}
    for(var i = nums2.length - 1; i >= 0; --i){
        var cur = nums2[i]

        while(stack.length && top(stack) < cur){
            stack.pop()
        }
        map[cur] = stack.length ? top(stack) : -1

        stack.push(cur)
    }
    
    return nums1.map(item=>map[item])

    function top(arr){
        return arr[arr.length - 1]
    }
};

var nums1 = [4,1,2], nums2 = [1,3,4,2]
var res = nextGreaterElement(nums1, nums2)
console.log(res) // [-1,3,-1]

// 2
// 4
// 4, 3
// 4, 3, 1