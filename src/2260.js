/**
 * @param {number[]} cards
 * @return {number}
 */
// 窗口左右两侧的数字相等，且中间不包含其他相等的数字
var minimumCardPickup = function (cards) {
    const n = cards.length
    const map = {}
    let r = 0
    let ans = Infinity
    while (r < n) {
        const ch = cards[r]
        if (map[ch] !== undefined) {
            ans = Math.min(ans, r - map[ch] + 1)
        }
        map[ch] = r
        r++
    }
    return ans === Infinity ? -1 : ans
};

var cards = [3, 4, 2, 3, 4, 7]
cards = [70, 37, 70, 41, 1, 62, 71, 49, 38, 50, 29, 76, 29, 41, 22, 66, 88, 18, 85, 53]
cards = [0, 0]
// cards = [2, 1, 2, 1, 1]
var ans = minimumCardPickup(cards)
console.log(ans)