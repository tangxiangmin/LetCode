/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    var len = arr.length
    for (var i = 0; i < len; ++i) {
        if (arr[i] === 0 && i + 1 < len) {
            var j = i + 1
            var placeholder = arr[j]
            arr[j] = 0
            i++
            for (; j < len - 1; ++j) {
                var tmp = arr[j + 1]
                arr[j + 1] = placeholder
                placeholder = tmp
            }
        }
    }
};

var arr = [1, 0, 2, 3, 0, 4, 5, 0]
arr = [0, 0, 0, 0, 0, 0, 0]
duplicateZeros(arr)
console.log(arr)