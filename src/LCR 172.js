/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
    const n = scores.length
    let l = 0
    let r = n - 1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (scores[mid] > target) {
            r = mid - 1
        } else if (scores[mid] === target) {
            let i = mid - 1
            while (scores[i] === target && i >= 0) {
                i--
            }
            let j = mid + 1
            while (scores[j] === target && j < n) {
                j++
            }
            return j - i - 1

        } else if (scores[mid] < target) {
            l = mid + 1
        }
    }
    return 0

};

var scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4
scores = [1, 2, 3, 5, 7, 9], target = 6
scores = [1], target = 1
var ans = countTarget(scores, target)
console.log(ans)