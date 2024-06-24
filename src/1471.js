/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b)
    const m = arr[Math.floor((arr.length - 1) / 2)]

    arr.sort((a, b) => {
        const x = Math.abs(a - m)
        const y = Math.abs(b - m)
        if (x === y) {
            return b - a
        }
        return y - x
    })
    return arr.slice(0, k)
};
var arr = [1, 2, 3, 4, 5], k = 2
arr = [-7, 22, 17, 3], k = 2
var ans = getStrongest(arr, k)
console.log(ans)