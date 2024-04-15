/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
// 长度为k的子数组，使用滑动窗口
var numOfSubarrays = function (arr, k, threshold) {
    const n = arr.length
    let l = 0
    let r = k - 1
    let sum = 0
    for (let i = 0; i < k; ++i) {
        sum += arr[i]
    }
    let ans = 0
    while (r < n) {
        if (sum / k >= threshold) {
            ans++
        }
        sum -= arr[l]
        r++
        l++
        sum += arr[r]
    }
    return ans
};

// 窗口大小是固定的，因此直接用一个索引值就可以处理
var numOfSubarrays = function (arr, k, threshold) {
    const n = arr.length
    let sum = 0
    for (let i = 0; i < k; ++i) {
        sum += arr[i]
    }
    let ans = 0
    for (let i = k; i <= n; ++i) {
        if (sum / k >= threshold) {
            ans++
        }
        sum -= arr[i - k]
        sum += i < n ? arr[i] : 0
    }
    return ans
}

var arr = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4
var ans = numOfSubarrays(arr, k, threshold)
console.log(ans)