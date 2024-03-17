/**
 * @param {number[]} array
 * @return {number[]}
 */
// 思路：双指针
// 那么对于元素 a[i] 来说，如果它左边存在大于 a[i] 的元素，那么 a[i] 是一定要参与到排序里去的。或者说如果它右边存在小于 a[i] 的元素，那么 a[i] 也是要参与到排序里去的。
var subSort = function (array) {
    var n = array.length

    var l = -1
    var r = -1
    var max = -Infinity
    var min = Infinity
    for (let i = 0; i < n; ++i) {
        if (array[i] < max) {
            r = i
        } else {
            max = array[i]
        }
    }
    for (var i = n - 1; i >= 0; --i) {
        if (array[i] > min) {
            l = i;
        } else {
            min = array[i];
        }
    }
    return [l, r]
};
var arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
var ans = subSort(arr)
console.log(ans)