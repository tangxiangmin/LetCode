/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
    const map = {}
    let ans = 0
    for (const d of demand) {
        const day = { ...map }
        for (const ch of d) {
            if (!day[ch]) {
                day[ch] = 1
                if (!map[ch]) map[ch] = 0
                map[ch]++
                ans++
            }
            day[ch]--
        }
    }
    return ans
};
var demand = ["acd", "bed", "accd"]
demand = ["abc","ab","ac","b"]
var ans = minNumBooths(demand)
console.log(ans)