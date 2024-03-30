/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
// 贪心加模拟
// 从0开始依次构建[0,s]的范围
var minimumAddedCoins = function (coins, target) {
    coins.sort((a, b) => a - b)
    let end = 0
    let i = 0
    let ans = 0
    while (end < target) {
        const cur = coins[i]
        if (cur - 1 > end) {
            // 将end+1数字加入
            ans++
            end += end + 1
            continue
        }
        end += cur
        i++
        // coins用完了还不够，将end+1加入到列表中
        if (i === coins.length && end < target) {
            ans++
            coins.push(end + 1)
        }
    }
    return ans
}

var coins = [1, 4, 10], target = 19
coins = [1, 4, 10, 5, 7, 19], target = 19
// coins = [1, 1, 1], target = 20
// coins = [100000], target = 100000

var ans = minimumAddedCoins(coins, target)
console.log(ans)