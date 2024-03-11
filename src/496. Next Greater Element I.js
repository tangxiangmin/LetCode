/**
 * https://leetcode.com/problems/next-greater-element-i/#/description
 */

// 思路1：BF
var nextGreaterElement = function (findNums, nums) {
    var len = nums.length;
    function findNextMax(val) {
        var index = nums.indexOf(val);
        for (var i = index; i < len; ++i) {
            var maxNum = nums[i];
            if (maxNum > val) {
                return maxNum;
            }
        }
        return -1;
    }

    var res = findNums.map((val) => {
        return findNextMax(val);

    })
    return res;
};

// 思路2：单调栈，从后向前遍历nums，保存每个元素右边比他更大的值
var nextGreaterElement = function (nums1, nums2) {
    const stack = []
    const map = {}
    for (let i = nums2.length - 1; i >= 0; --i) {
        let cur = nums2[i]
        while (stack.length && stack[stack.length - 1] < cur) {
            stack.pop()
        }
        map[cur] = stack.length ? stack[stack.length - 1] : -1
        stack.push(cur)
    }
    return nums1.map((val) => map[val])
}


var nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
// nums1 = [2, 4], nums2 = [1, 2, 3, 4]
// nums1 = [4, 1, 2], nums2 = [1, 2, 3, 4]
var ans = nextGreaterElement(nums1, nums2)
console.log(ans)