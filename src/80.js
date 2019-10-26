/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：给定数组已排序，因此使用快慢指针与一个计数器，如果不限制空间复杂度O(1)，则可以取每段数字的前两个，然后返回拼接后的新数组即可
var removeDuplicates = function (nums) {
    var len = nums.length
    var ans = []
    var count = 1
    for (var i = 0; i < len; ++i) {
        var j = i + 1
        ans.push(nums[i])
        while (nums[i] === nums[j]) {
            count++
            j++
            if (count <= 2) {
                ans.push(nums[i])
            }
        }
        count = 1
        i = j - 1
    }

    return ans
};

// 由于本题需要在原数组上修改，因此可以直接修改前面已经遍历过的数组
var removeDuplicates = function (nums) {
    var len = nums.length
    var ans = 0
    var count = 1

    for (var i = 0; i < len; ++i) {
        var j = i + 1
        nums[ans++] = nums[i]
        while (nums[i] === nums[j]) {
            j++
            if (++count <= 2) {
                nums[ans++] = nums[i]
            }
        }
        count = 1
        i = j - 1
    }
    // console.log(nums)
    return ans
};

var nums = [1, 1, 1, 2, 2, 3] // 5
// nums = [0, 0, 1, 1, 1, 1, 2, 3, 3] // 7


var res = removeDuplicates(nums)
console.log(res)