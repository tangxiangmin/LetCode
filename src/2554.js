/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    let sum = 0
    let arr = []
    const map = {}
    for (const num of banned) {
        map[num] = 1
    }
    for (let i = 1; i <= n; ++i) {
        if (map[i]) continue
        sum += i
        arr.push(sum)
    }
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        const mid = (l + r) >> 1
        if (arr[mid] >= maxSum) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    if (arr[l] === maxSum) {
        return l + 1
    } else {
        return r + 1
    }
};
// 实际上不需要二分，就按顺序选小的
var maxCount = function (banned, n, maxSum) {
    let sum = 0
    const map = {}
    for (const num of banned) {
        map[num] = 1
    }
    let cnt = 0
    for (let i = 1; i <= n; ++i) {
        if (map[i]) continue
        sum += i
        if (sum > maxSum) {
            break

        }
        cnt++
    }
    return cnt
}

var banned = [1, 6, 5], n = 5, maxSum = 6
var ans = maxCount(banned, n, maxSum)
console.log(ans)