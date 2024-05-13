/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
// 模拟即可
var garbageCollection = function (garbage, travel) {
    const arr = []
    for (const house of garbage) {
        const map = { M: 0, P: 0, G: 0 }
        for (const ch of house) {
            map[ch]++
        }
        arr.push(map)
    }

    let ans = 0
    for (const type of ['M', 'P', "G"]) {
        ans += move(type)
    }
    return ans

    function move(type) {
        const n = arr.length
        let cnt = 0
        let duration = 0
        for (let i = 0; i < n; ++i) {
            const map = arr[i]
            duration += i === 0 ? 0 : travel[i - 1] // 行驶
            if (map[type]) {
                cnt += duration
                duration = 0
                cnt += map[type] // 收集
            }
        }
        return cnt
    }
};
var garbage = ["G", "P", "GP", "GG"], travel = [2, 4, 3]
garbage = ["MMM","PGM","GP"], travel = [3,10]
var ans = garbageCollection(garbage, travel)
console.log(ans)