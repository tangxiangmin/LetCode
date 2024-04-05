/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 不考虑移除小的数字，而是移动索引值，并将小的元素追加到最后，这样可以节省操作数组的时间
var getWinner = function (arr, k) {

    let maxIdx = 0
    let i = 1
    let count = 0
    const max = Math.max(...arr)
    while (count < k) {
        if (arr[maxIdx] === max) return max
        if (arr[maxIdx] > arr[i]) {
            // 本回合胜利
            arr.push(arr[i])
            count++
        } else {
            maxIdx = i
            count = 1
        }
        i++
    }
    return arr[maxIdx]
};

var arr = [2, 1, 3, 5, 4, 6, 7], k = 2
arr = [3, 2, 1], k = 10
var ans = getWinner(arr, k)
console.log(ans)