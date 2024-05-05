/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */

// 这道题实际上就是判断从start 每个变化一个字符，变化之后的字符串是否在bank中，并最终可以变成end
// 思路，从start开始，将变化一个字符串并出现在bank中的字符串加入队列中，bfs
var minMutation = function (startGene, endGene, bank) {
    const queue = [startGene]
    const visited = {}
    let cnt = 0
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; ++i) {
            const cur = queue.shift()
            if (cur === endGene) return cnt
            for (const gene of bank) {
                if (!visited[gene] && check(cur, gene)) {
                    visited[gene] = 1
                    queue.push(gene)
                }
            }
        }
        cnt++
    }
    return -1


    function check(s1, s2) {
        let flag = true
        for (let i = 0; i < 8; ++i) {
            if (s1[i] !== s2[i]) {
                if (!flag) return false
                flag = false
            }
        }
        return true
    }
};
var start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
var ans = minMutation(start, end, bank)
console.log(ans)