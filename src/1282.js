/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const cntMap = new Map()
    let ans = []
    const n = groupSizes.length
    for (let i = 0; i < n; ++i) {
        const val = groupSizes[i]
        if (!cntMap.has(val)) {
            cntMap.set(val, [])
        }
        const list = cntMap.get(val)
        list.push(val)

        if (list.length === val) {
            ans.push(list)
            cntMap.set(val, [])
        }
    }
    return ans
};