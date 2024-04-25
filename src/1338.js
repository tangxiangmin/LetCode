/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    const map = {}
    for (const num of arr) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    const keys = Object.keys(map)
    keys.sort((a, b) => map[b] - map[a])
    let sum = 0
    let n = arr.length
    let i = 0;
    while (i < keys.length) {
        sum += map[keys[i]]
        i++
        if (sum >= n / 2) break
    }
    return i
};

var arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]
arr = [7, 7, 7, 7, 7, 7]
var ans = minSetSize(arr)
console.log(ans)