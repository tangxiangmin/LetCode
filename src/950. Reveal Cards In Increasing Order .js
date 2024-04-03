/**
 * @param {number[]} deck
 * @return {number[]}
 */
// 模拟一下
var deckRevealedIncreasing = function (deck) {
    const n = deck.length
    if (n === 1) return deck
    deck.sort((a, b) => a - b)

    let index = 0
    let ans = new Array(n).fill(-1)
    let blanks = []
    for (let i = 0; i < n; ++i) {
        if (i % 2 == 0) {
            ans[i] = deck[index++]
        } else {
            blanks.push(i)
        }
    }

    // 如果当前轮次遍历完之后，需要移动最后一个数字到末尾，则需要留一个空位
    let offset = n % 2 ? 1 : 0

    while (blanks.length) {
        let left = []
        for (let i = 0; i < blanks.length; ++i) {
            if (i % 2 == offset) {
                ans[blanks[i]] = deck[index++]
            } else {
                left.push(blanks[i])
            }
        }
        offset = (blanks.length + offset) % 2 ? 1 : 0
        blanks = left
    }
    return ans

};
// [17,13,11,2,3,5,7] -> [2, 13, 3, 11, 5, 17, 7]
var deck = [17, 13, 11, 2, 3, 5, 7]
// var arr = [17, 13, 11, 2, 3, 5, 7, 18]
deck = [1, 2, 3, 4, 5, 6, 7, 8]
// deck = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var ans = deckRevealedIncreasing(deck)
console.log(ans)
