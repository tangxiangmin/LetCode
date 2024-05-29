/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
    const map = new Map()
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        if (!map.has(num)) {
            map.set(num, [])
        }
        map.get(num).push(i)
    }
    return queries.map(v => {
        const list = map.get(x)
        if (!list || list.length < v) return -1
        return list[v - 1]
    })

};
var nums = [1, 3, 1, 7], queries = [1, 3, 2, 4], x = 1
var ans = occurrencesOfElement(nums, queries, x)
console.log(ans)