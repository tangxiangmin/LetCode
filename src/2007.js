/**
 * @param {number[]} changed
 * @return {number[]}
 */
// 看起来可以用双指针
var findOriginalArray = function (changed) {
    changed.sort((a, b) => a - b)
    let slow = 0
    let fast = 0
    const n = changed.length
    const used = new Array(n).fill(0)
    const ans = []

    while (fast < n) {
        if (used[slow]) {
            slow++
            continue
        }
        fast = Math.max(slow + 1, fast)
        while (changed[fast] !== changed[slow] * 2 && fast < n) {
            fast++
        }
        if (fast === n) break
        used[fast] = 1
        ans.push(changed[slow])
        fast++
        slow++
    }
    return ans.length === n / 2 ? ans : []
};

var changed = [1, 3, 4, 2, 6, 8]
changed = [6, 3, 0, 1]
changed = [1]
changed = [0, 0, 0, 0]
changed = [2, 1, 2, 4, 2, 4]
changed = [1, 2, 2, 2, 3, 4, 4, 4, 6, 6, 8, 12]
var ans = findOriginalArray(changed)
console.log(ans)