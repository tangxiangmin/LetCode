/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// BF
var successfulPairs = function (spells, potions, success) {
    const ans = []
    for (const s of spells) {
        let cnt = 0
        for (const p of potions) {
            if (s * p >= success) {
                cnt++
            }
        }
        ans.push(cnt)
    }
    return ans
};
// 对potions排序，可以使用二分找到 success/spells[i]的左边界
var successfulPairs = function (spells, potions, success) {
    const ans = []
    const n = potions.length
    potions.sort((a, b) => a - b)
    for (const s of spells) {
        ans.push(find(Math.ceil(success / s)))
    }
    return ans

    function find(num) {
        let l = 0
        let r = n - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (potions[mid] >= num) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        if (potions[l] >= num) {
            return n - l
        }
        return 0
    }

}
var spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7
spells = [3, 1, 2], potions = [8, 5, 8], success = 16
var ans = successfulPairs(spells, potions, success)
console.log(ans)