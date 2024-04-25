/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}
    for (const num of nums) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    const keys = Object.keys(map).map(row => +row)

    keys.sort((a, b) => map[b] - map[a])
    return keys.slice(0, k)

};