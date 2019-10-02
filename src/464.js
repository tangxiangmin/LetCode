/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    // 当可选数据大于等于目标时，先手必胜
    if (maxChoosableInteger >= desiredTotal) {
        return true
    }

    // todo 处理已选过的元素
    for (var i = 1; i <= maxChoosableInteger; ++i) {
        // 当前选手选i，则对手如果能够胜利，则失败
        if (!canIWin(maxChoosableInteger, desiredTotal - i)) {
            return true
        }
    }
    return false

}

var maxChoosableInteger = 10, desiredTotal = 11
// maxChoosableInteger = 10, desiredTotal = 40
var res = canIWin(maxChoosableInteger, desiredTotal)
console.log(res)

// dp[sum]表示目标为sum时先手用户胜利，
//  当目标树在可选数内时，返回true dp[sum] = true if sum < max
//  当先手选i时，则对手而言，dp[sum-i] = fase
// 本题增加了 不能重复使用整数 的限制，则需要额外记住每次选择的数

// dp[0][i]表示先手选i时是否胜利, dp[0][i] = true if target in ChoosableInteger
// dp[1][i] 表示后手选i时是否胜利
// 则dp[0][i] = !dp[1][i]且，dp[0][i] = !dp[1][target - i]
// dp[0][i+1] = 


// dp[i]先手选i成功，则问题转换为dp[sum-i]失败

// 10, 19
// sum - i < 

// dp[i1, i2], 
// dp[i]表示先手选i时的胜利状态
// dp[i][sum] = dp[i][]
// dp[i][sum] = !dp[i+j[1:max]][sum-j[1:max]]