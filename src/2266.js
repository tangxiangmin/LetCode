/**
 * @param {string} pressedKeys
 * @return {number}
 */
// 思路：处理连续相同的数字和数量，判断种类，最后相乘
// 但是对于连续相同的元素解法不正确
// var countTexts = function (pressedKeys) {
//     const n = pressedKeys.length
//     let l = 0
//     let r = 0
//     let ans = 1
//     const mod = 10 ** 9 + 7
//     while (r < n) {
//         const diff = (pressedKeys[l] === 7 || pressedKeys[l] === 9) ? 4 : 3
//         while (pressedKeys[r] === pressedKeys[l] && r - l < diff) {
//             r++
//         }
//         const len = r - l
//         let cnt = 0
//         if (len === 1) {
//             cnt = 1
//         } else if (len === 2) {
//             cnt = 2
//         } else if (len === 3) {
//             cnt = 4
//         } else if (len === 4) {
//             cnt = 8
//         }
//         ans = (ans * cnt) % mod
//         l = r
//     }
//     return ans % mod
// };
// 不同组不影响，跟爬楼梯类似，
// 在一组数字完全相同的字符串中
// dp[i]表示将末尾的1、2、3、4个字符认为是同一个字母
// 对于7和9的按键dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4]
// 对于其他按键dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
// 但是JS的代码很容易在letcode上整数溢出
var countTexts = function (pressedKeys) {
    const n = pressedKeys.length
    const mod = BigInt(10 ** 9 + 7)

    const f = [1n, 1n, 2n, 4n] // 非7、9的元素
    const g = [1n, 1n, 2n, 4n] // 7、9 
    for (let i = 4; i <= 10 ** 5; ++i) {
        f[i] = (f[i - 1] + f[i - 2] + f[i - 3]) % mod
        g[i] = (g[i - 1] + g[i - 2] + g[i - 3] + g[i - 4]) % mod
    }

    let ans = 1n, cnt = 0n;
    for (let i = 0; i < n; ++i) {
        cnt++
        const c = pressedKeys[i]
        if (i == n - 1 || c != pressedKeys[i + 1]) {
            const dp = (c != '7' && c != '9') ? f : g
            ans = ans * dp[cnt] % mod
            cnt = 0n
        }
    }
    return Number(ans)
}

var pressedKeys = "22233"
pressedKeys = "222222222222222222222222222222222222"
// var pressedKeys = "22233999"
pressedKeys = "88888888888888888888888888888999999999999999999999999999994444444444444444444444444444488888888888888888888888888888555555555555555555555555555556666666666666666666666666666666666666666666666666666666666222222222222222222222222222226666666666666666666666666666699999999999999999999999999999888888888888888888888888888885555555555555555555555555555577777777777777777777777777777444444444444444444444444444444444444444444444444444444444433333333333333333333333333333555555555555555555555555555556666666666666666666666666666644444444444444444444444444444999999999999999999999999999996666666666666666666666666666655555555555555555555555555555444444444444444444444444444448888888888888888888888888888855555555555555555555555555555555555555555555555555555555555555555555555555555555555999999999999999555555555555555555555555555554444444444444444444444444444444555"

var ans = countTexts(pressedKeys)
console.log(ans)