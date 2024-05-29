/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {

    const map = new Map()
    for (const [w, l] of matches) {
        add(w, 'w')
        add(l, 'l')
    }

    const a = []
    const b = []

    for (const user of map.values()) {
        const { id, w, l } = user
        if (l === 0) {
            a.push(id)
        } else if (l === 1) {
            b.push(id)
        }
    }
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)
    return [a, b]

    function add(id, key) {
        const record = map.get(id) ?? { id, w: 0, l: 0 }
        record[key]++
        map.set(id, record)
    }
};
var matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
var ans = findWinners(matches)
console.table(ans)