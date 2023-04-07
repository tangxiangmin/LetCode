/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */

// "Flush"：同花，五张相同花色的扑克牌。
// "Three of a Kind"：三条，有 3 张大小相同的扑克牌。
// "Pair"：对子，两张大小一样的扑克牌。
// "High Card"：高牌，五张大小互不相同的扑克牌。

var bestHand = function(ranks, suits) {
    if(suits.every(suit=>suit ===suits[0])) return 'Flush'
    var buket = new Array(14).fill(0)
    for(var rank of ranks){
        buket[rank]++
    }
    var max = -1
    for(var val of buket){
        if(max < val){
            max = val
        }
    }
    if(max >= 3) return 'Three of a Kind'
    if(max === 2) return 'Pair'
    return 'High Card'

};

var ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]
ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]
var ans = bestHand(ranks, suits)
console.log(ans)