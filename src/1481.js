/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const map = {}
    for (const num of arr) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    const keys = Object.keys(map).sort((a, b) => map[a] - map[b])

    const n = keys.length
    for (let i = 0; i < n; ++i) {
        const key = keys[i]
        if (map[key] > k) {
            return n - i
        }
        k -= map[key]
    }
    return 0
};
var arr = [5, 5, 4], k = 1
var ans = findLeastNumOfUniqueInts(arr, k)
console.log(ans)