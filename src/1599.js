/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {

    let i = 0
    const n = customers.length
    let a = 0 // 收入
    let b = 0 // 支出
    let max = 0
    let ans = 0
    let cnt = 0
    while (i < n) {
        let val = 0 // 本轮可以上的人数
        // if (cnt === 584) debugger
        while (val < 4 && i < n) {
            if (customers[i] >= 4) {
                customers[i] -= (4 - val)
                val = 4
                break
            }
            val += customers[i]
            customers[i] = 0
            i++
        }
        if (val === 0) continue


        if (val * boardingCost < runningCost) {
            return ans
        }

        a += val * boardingCost
        b += runningCost
        cnt++
        const p = a - b
        console.log(max, p, cnt)
        if (p > max) {
            ans = cnt
            max = p
        }
    }
    return ans === 0 ? -1 : ans
};

function minOperationsMaxProfit(customers, boardingCost, runningCost) {
    const n = customers.length;

    let ans = -1;   // 记录轮次
    let max = 0;   // 记录收益最大值
    let down = 0;   // 未玩过人数
    let up = 0;     // 玩过人数
    for (let i = 1; i <= n || down; i += 1) {
        if (i <= n) {
            down += customers[i - 1];
        }
        // 最多一次上四个人
        let val = Math.min(4, down);
        down -= val;
        up += val;
        // 题意的计算方式
        val = up * boardingCost - i * runningCost;
        if (val > max) {
            max = val;
            ans = i;
        }
    }

    return ans;
}



var customers = [8, 3], boardingCost = 5, runningCost = 6
customers = [10, 9, 6], boardingCost = 6, runningCost = 4
customers = [3, 4, 0, 5, 1], boardingCost = 1, runningCost = 92
customers = [10, 10, 6, 4, 7], boardingCost = 3, runningCost = 8
customers = [10, 10, 1, 0, 0], boardingCost = 4, runningCost = 4 // 5
customers =
    [32, 43, 39, 29, 10, 15, 36, 44, 34, 9, 2, 16, 49, 47, 48, 40, 39, 35, 22, 48, 41, 46, 17, 47, 25, 17, 0, 45, 39, 19, 4, 9, 3, 16, 35, 14, 23, 23, 15, 11, 17, 31, 31, 47, 50, 5, 46, 29, 15, 14, 37, 28, 33, 6, 39, 45, 49, 44, 11, 38, 28, 25, 20, 36, 27, 15, 3, 1, 37, 49, 5, 34, 26, 45, 40, 47, 43, 46, 35, 1, 30, 28, 22], boardingCost = 11, runningCost = 33
var ans = minOperationsMaxProfit(customers, boardingCost, runningCost)
console.log(ans)