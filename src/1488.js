/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    const pool = []
    const n = rains.length
    let ans = []
    for (let i = 0; i < n; ++i) {
        const j = rains[i]
        if (j === 0) {
            ans[i] = find(i)
        } else {
            if (!pool[j]) {
                pool[j] = 0
            }
            pool[j] += 1

            if (pool[j] >= 2) {
                console.log(pool)
                return []
            }
            ans[i] = -1
        }
    }

    return ans
    // 应该是向后找到第一个可能会发生洪水的湖，优先抽干
    function find(start) {
        for (let i = start + 1; i < n; ++i) {
            if (rains[i] !== 0 && pool[rains[i]] >= 1) {
                const val = rains[i]
                rains[i] = -1
                return val
            }
        }
        // 向前找一个湖抽了
        // for (let i = 1; i < pool.length; ++i) {
        //     if (pool[i] >= 1) {
        //         return i
        //     }
        // }
        return -1
    }
};
var rains = [1, 2, 3, 4]
rains = [1, 2, 0, 0, 2, 1]
// rains = [1, 2, 0, 1, 2]
// rains = [69, 0, 0, 0, 69]
// rains = [1, 0, 2, 0]
// rains = [1, 0, 2, 0, 2, 1]
var ans = avoidFlood(rains)
console.log(ans)