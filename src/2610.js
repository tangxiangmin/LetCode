/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const map = {}
    for (const num of nums) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    var ans = []
    while (true) {
        const row = []
        for (const key in map) {
            if (map[key] > 0) {
                row.push(+key)
                map[key]--
            }
        }
        if (row.length === 0) break
        ans.push(row)
    }
    return ans

};