/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
// 滑动窗口，大小为minutes，统计最大值
var maxSatisfied = function (customers, grumpy, minutes) {
    const n = customers.length
    let sum = 0


    for (let i = 0; i < minutes; ++i) {
        sum += customers[i]
    }
    // 保存右边正常的结果
    for (let i = minutes; i < n; ++i) {
        sum += grumpy[i] ? 0 : customers[i]
    }

    let ans = sum
    for (let i = minutes; i < n; ++i) {
        if (grumpy[i - minutes]) {
            sum -= customers[i - minutes]
        }
        if (grumpy[i]) {
            sum += customers[i]
        }
        ans = Math.max(sum, ans)

    }
    return ans
};

var customers = [4, 10, 10], grumpy = [1, 1, 0], minutes = 2

var ans = maxSatisfied(customers, grumpy, minutes)
console.log(ans)