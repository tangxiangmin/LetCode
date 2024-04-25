/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
    const map = {}
    let maxP = 0
    const n = creators.length
    for (let i = 0; i < n; ++i) {
        const c = creators[i]
        const id = ids[i]
        const v = views[i]
        if (!map[c]) {
            map[c] = {
                p: 0,
                c,
                maxIndex: i
            }
        }
        map[c].p += v
        maxP = Math.max(maxP, map[c].p)
        const prevMax = map[c].maxIndex
        if (views[prevMax] < v) {
            map[c].maxIndex = i
        } else if (views[prevMax] === v && ids[prevMax] > id) {
            map[c].maxIndex = i
        }
    }
    const ans = []
    for (const { p, c, maxIndex } of Object.values(map)) {
        if (p === maxP) {
            ans.push([c, ids[maxIndex]])
        }
    }
    return ans

};
var creators = ["alice", "bob", "alice", "chris"], ids = ["one", "two", "three", "four"], views = [5, 10, 5, 4]
creators = ["alice","alice","alice"], ids = ["a","b","c"], views = [1,2,2]
var ans = mostPopularCreator(creators, ids, views)
console.log(JSON.stringify(ans))