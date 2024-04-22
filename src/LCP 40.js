/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
// 好像还要贪心。。。。
var maxmiumScore = function (cards, cnt) {
    const n = cards.length
    cards.sort((a, b) => b - a)
    console.log(cards)
    let ans = 0
    let i = 0
    while (i < cnt) {
        ans += cards[i]
        i++
    }
    if (ans % 2 === 0) return ans
    ans -= cards[i - 1]

    while (i < n) {
        ans += cards[i]
        if (ans % 2 === 0) {
            return ans
        }
        ans -= cards[i]
        i++
    }
    return 0
};
var cards = [1, 2, 8, 9], cnt = 3
cards = [3, 3, 1], cnt = 1
cards = [9, 5, 9, 1, 6, 10, 3, 4, 5, 1], cnt = 2
var ans = maxmiumScore(cards, cnt)
console.log(ans)