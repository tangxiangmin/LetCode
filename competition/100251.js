/**
 * @param {string[]} arr
 * @return {string[]}
 */
function getSubstr(str) {
    if (str.length === 1) {
        return [str]
    }
    let ans = []
    let map = {}
    for (let i = 0; i < str.length; ++i) {
        for (let j = i; j <= str.length; ++j) {
            let s = str.substring(i, j)
            if (s && !map[s]) {
                ans.push(s)
                map[s] = true
            }
        }
    }
    return ans
}
var shortestSubstrings = function (arr) {
    let map = {}
    const group = []
    for (const str of arr) {
        const list = getSubstr(str)
        // 按长度排序，长度一致按字典序排序
        list.sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length
            }
            return a.localeCompare(b)
        })
        group.push(list)
        for (const s of list) {
            if (!map[s]) map[s] = 0
            map[s]++
        }
    }
    const ans = []
    for (const g of group) {
        let flag = false
        for (const s of g) {
            if (map[s] === 1) {
                ans.push(s)
                flag = true
                break
            }
        }
        !flag && ans.push("")
    }
    return ans
};
// cab
// ca cab
// ab

var arr = ["cab", "ad", "bad", "c"]
// arr = ["abc", "bcd", "abcd"]
arr = ["gfnt", "xn", "mdz", "yfmr", "fi", "wwncn", "hkdy"]
arr = ["vbb", "grg", "lexn", "oklqe", "yxav"]
var ans = shortestSubstrings(arr)
console.log(ans)