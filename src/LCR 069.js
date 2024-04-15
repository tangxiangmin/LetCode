/**
 * @param {number[]} arr
 * @return {number}
 */
// 前面递增，后面递减
var peakIndexInMountainArray = function (arr) {
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        const mid = (l + r) >> 1
        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1
        } else if (arr[mid] > arr[mid + 1]) {
            r = mid
        }
    }
    return l
};

var arr = [0, 1, 0]
arr = [24,69,100,99,79,78,67,36,26,19]
var ans = peakIndexInMountainArray(arr)
console.log(ans)