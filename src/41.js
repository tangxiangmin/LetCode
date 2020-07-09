// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：使用桶排序，然后依次遍历，时间O(n),空间O(n)
// 由于题目要求使用常数级别的额外空间，因此无法通过某些内存检测
var firstMissingPositive = function (nums) {
    if (!nums.length) return 1;
    var max = Math.max(...nums);
    var arr = new Array(max).fill(false);
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] >= 0) {
            arr[nums[i]] = true;
        }
    }
    for (var i = 1; i < arr.length; ++i) {
        if (!arr[i]) {
            return i;
        }
    }
    return arr.length;
};
// 思路2：在上面的解法中使用了额外的空间来保存出现的数据，实际上可以利用已有的nums
// 根据题意，答案只能出现在[1,nums.length +1]的范围内 -> 如果1到len都出现了，则答案为len+1
// 因此，我们只需要标记1到len的数据，那么如何标记呢？比如遍历到元素3，我们将nums[3-1]处的数据标记为负数
// 标记完成之后，再遍历数组直到第一个不为负数的元素，表示该索引值index+1出的元素未出现，返回答案
var firstMissingPositive = function (nums) {
    var len = nums.length;
    if (!len) return 1;
    for (var i = 0; i < len; ++i) {
        if (nums[i] <= 0) {
            nums[i] = len + 1;
        }
    }

    // console.log(nums)
    for (var i = 0; i < len; ++i) {
        // 后面遍历的元素可能已经被标记，因此此处需要取绝对值
        var num = Math.abs(nums[i]);
        if (num <= len) {
            // num 元素已经出现，标记对应索引值，由于可能会重复标记，都需要将其标记成负数
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    // console.log(nums)

    for (var i = 0; i < len; ++i) {
        // 表示i处的数字未被标记
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return len + 1;
};

// 思路3：使用置换，将出现的正整数放在正确的位置，如 [3,4,-1,1]，将1放在索引值为0的位置，3放在索引值为2的位置，依次类推，最终答案为出现第一个空位或len+1，与思路1的桶排序类似，但是是原数组进行的，因此不需要额外的空间
var firstMissingPositive = function (nums) {
    var n = nums.length;
    if (n < 1) return 1;
    for (var i = 0; i < n; ++i) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            var tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    
    for (var i = 0; i < n; ++i) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};

var arr = [7, 8, 9, 11, 12];
arr = [3, 4, -1, 1];
// arr = [0]
// arr = [1,1]
var res = firstMissingPositive(arr);
console.log(res);
