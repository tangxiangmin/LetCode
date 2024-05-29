/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 统计每次插入障碍后，分隔的区域最大的长度
var getResults = function (queries) {

    const ans = []
    const list = [] // 保存插入的障碍物
    const group = [] // 保存每个分块
    for (const [a, b, c] of queries) {
        if (a === 1) {
            if (!list.length) {
                group.push(b)
                list.push(b)
                continue
            }

            let l = 0
            let r = list.length - 1
            while (l <= r) {
                const mid = (l + r) >> 1
                const v = list[mid]
                if (v > b) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
            r += 1

            if (r === 0) {
                group.unshift(b)
                group[1] = group[1] - b
            } else if (r === group.length) {
                group.push(b - list[list.length - 1])
            } else {
                const left = b - list[r - 1]
                const right = list[r] - b
                group.splice(r, 1, left, right)
            }
            list.splice(r, 0, b)
        } else {
            ans.push(check(b, c))
        }
    }
    return ans

    function check(x, sz) {
        if (x < sz) return false
        if (!list.length) return x >= sz
        let l = 0
        let r = list.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            const v = list[mid]
            if (v > x) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        if (r === -1) return group[0] > sz
        const left = list[r]

        if (x - left >= sz) return true
        for (let i = 0; i <= r; ++i) {

            const val = group[i]
            if (val >= sz) {
                return true
            }
        }
        return false
    }
};

var queries = [[1, 2], [2, 3, 3], [2, 3, 1], [2, 2, 2]]
// queries = [[1, 7], [2, 7, 6], [1, 2], [2, 7, 5], [2, 7, 6]]
// queries = [[2, 1, 1]]
// queries = [[2, 1, 2]]
// queries = [[1, 4], [2, 1, 2]]
// queries = [[1, 1], [1, 5], [1, 13], [1, 14], [2, 12, 8]]
queries = [[1, 5], [2, 2, 1]]
queries = [[1, 5], [1, 7], [2, 4, 11], [2, 7, 3]]
queries = [[1, 1], [1, 11], [1, 4], [1, 8], [2, 13, 7]]
queries = [[1, 2], [2, 13, 5], [1, 5], [1, 11], [2, 15, 7]]
var ans = getResults(queries)
console.log(ans)