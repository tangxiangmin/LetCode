
/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
// 本题的描述有点不清楚，以：tokens = [100,200,300,400], P = 200为例
// 先买100，score=0+1,p=200-100
// 再卖400的令牌,score=1-1,p=100+400
// 此时再买200和300，score = 0+1+1, p = 500-200-300, max score=2
// 注意每张牌只能使用1次

// 贪心思路：当存在分数的时候，可以用较少能量的牌换取较大能量的牌，当能量足够时我们希望购买尽可能多的牌来保证自己的分数，为了方便获取最值，可以将tokens排序
// 最终答案一定是在一次让令牌正常朝上操作之后产生的，因此当有足够能量的时候一直买牌获取分数，当能量不够时，再翻一张能量值最大的牌，

var bagOfTokensScore = function (tokens, P) {
    tokens.sort((a, b) => a - b)

    var l = 0 // 买牌的索引值
    var r = tokens.length - 1 // 卖牌的索引值
    var score = 0
    var ans = 0
    while (l <= r) {
        while (P >= tokens[l] && l <= r) {
            score++
            P -= tokens[l++]
        }
        if (ans < score) ans = score

        if (score > 0) {
            score--
            P += tokens[r]
            r--
        } else {
            break
        }

    }
    return ans
};

var tokens = [100, 200, 300, 400], P = 200
var res = bagOfTokensScore(tokens, P)
console.log(res)

// 如果使用动态规划，看起来很麻烦
// dp[score][p][tokens] 表示牌为tokens、分数为score，能量为p时的可获取最大分数
// dp[score][p][tokens] = Math.max((score...i)dp[score-i][p + 最大的i个ctoken][tokens-i])
// 我们希望获取的最终结果 dp[0][P] 