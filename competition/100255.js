/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
    const map = {}
    for (const ch of word) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    const keys = Object.keys(map)
    keys.sort((a, b) => map[a] - map[b])

    let ans = Infinity
    function backtrack(l, r, count) {

        if (l >= r) {
            if (ans > count) {
                ans = count
            }
            return
        }
        const left = map[keys[l]]
        const right = map[keys[r]]

        const diff = right - left
        if (diff > k) {
            backtrack(l + 1, r, count + left)
            map[keys[r]] -= diff - k
            backtrack(l, r - 1, count + diff - k)
            map[keys[r]] += diff - k
        } else {
            if (ans > count) {
                ans = count
            }
        }

    }
    backtrack(0, keys.length - 1, 0)

    return ans
};

var word = "aabcaba", k = 0
// word = "dabdcbdcdcd", k = 2
// word = "aaabaaa", k = 2
// word = "itatwtiwwi", k = 1 // 1
// word = "vvnowvov", k = 2 // 

var ans = minimumDeletions(word, k)
console.log(ans)
