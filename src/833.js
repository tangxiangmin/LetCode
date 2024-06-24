/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

var findReplaceString = function (s, indices, sources, targets) {
    let idx = 0
    let ans = ''

    const arr = indices.map((_, index) => {
        return {
            idx: indices[index],
            soruce: sources[index],
            target: targets[index]
        }
    })
    arr.sort((a, b) => a.idx - b.idx)

    //测试用例有很多特殊的情况，需要对 indices 进行排序，还需要考虑索引值重复
    for (let i = 0; i < s.length; ++i) {
        let update = false
        while (idx < arr.length && i === arr[idx].idx) {
            const row = arr[idx]
            const sub = row.soruce

            const origin = s.substring(i, i + sub.length)
            if (origin === sub) {
                ans += row.target
                i += sub.length - 1
                update = true
            }
            idx++
        }
        if (!update) {
            ans += s[i]
        }
    }
    return ans
};

var s = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
s = "abcd", indices = [0, 2], sources = ["ab", "ec"], targets = ["eee", "ffff"]
s = "abcde", indices = [2, 2], sources = ["bc", "cde"], targets = ["fe", "f"]
var ans = findReplaceString(s, indices, sources, targets)
console.log(ans)