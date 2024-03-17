/**
 * @param {number[]} arr
 * @return {number}
 */

// 删除连续的几个元素使剩余的元素升序
// 可以使用双指针，两头向中间遍历，最后确定需要裁剪的区域
var findLengthOfShortestSubarray = function (arr) {
    let n = arr.length
    let j = n - 1
    while (j > 0 && arr[j] >= arr[j - 1]) {
        j--
    }
    if (j === 0) {
        return 0
    }
    let res = j // 极端情况就是将前面的所有元素都删掉
    for (let i = 0; i < n; ++i) {
        while (j < n && arr[j] < arr[i]) {
            j++
        }
        res = Math.min(res, j - i - 1)
        // 不用倒推了，i到j的元素都需要移除
        if (i + 1 < n && arr[i] > arr[i + 1]) {
            break
        }
    }
    return res
};


var arr = [1, 2, 3, 10, 4, 2, 3, 5]
arr = [1, 2, 3, 3, 10, 1, 3, 3, 5]
var ans = findLengthOfShortestSubarray(arr)
console.log(ans)