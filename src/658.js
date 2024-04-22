/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// 两次排序
var findClosestElements = function (arr, k, x) {
    arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x))
    return arr.slice(0, k).sort((a, b) => a - b)
}

// 双指针，找到距离目标元素x最近的索引值，然后左右滑动窗口
var findClosestElements = function (arr, k, x) {
    arr.sort((a, b) => a - b)
    const n = arr.length

    let right = find()

    let left = right - 1
    while (k > 0) {
        if (left < 0) {
            right++;
        } else if (right >= arr.length) {
            left--;
        } else if (x - arr[left] <= arr[right] - x) {
            left--;
        } else {
            right++;
        }

        k--
    }
    return arr.slice(left + 1, right)

    function find() {
        let low = 0, high = arr.length - 1;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            if (arr[mid] >= x) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
};

var findClosestElements = function (arr, k, x) {
    arr.sort((a, b) => a - b)
    const n = arr.length

    let right = find()
    let left = right - 1
    while (k > 0) {
        k--
        if (left < 0) {
            right++
        } else if (right > n - 1) {
            left--
        } else if (x - arr[left] <= arr[right] - x) {
            left--
        } else {
            right++
        }
    }
    return arr.slice(left + 1, right)

    function find() {
        let l = 0
        let r = n - 1
        while (l < r) {
            const mid = (l + r) >> 1
            if (arr[mid] >= x) {
                r = mid
            } else {
                l = mid + 1
            }
        }
        return r
    }
}

var arr = [1, 2, 3, 4, 5], k = 4, x = 3
arr = [1, 2, 3, 4, 5], k = 4, x = -1
var ans = findClosestElements(arr, k, x)
console.log(ans)