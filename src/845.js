/**
 * @param {number[]} arr
 * @return {number}
 */
// 思路，找到每个山顶，然后左右遍历
var longestMountain = function (arr) {

    var n = arr.length
    let ans = 0
    for (let i = 1; i < n - 1; ++i) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let j = i - 1
            while (j > 0 && arr[j] > arr[j - 1]) {
                j--
            }
            let k = i + 1
            while (k < n - 1 && arr[k] > arr[k + 1]) {
                k++
            }
            // console.log(i, j, k)
            ans = Math.max(k - j + 1, ans)
        }
    }
    return ans
};
var arr = [2, 1, 4, 7, 3, 2, 5]
arr = [2,2,2]
var ans = longestMountain(arr)
console.log(ans)