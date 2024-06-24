/**
 * @param {number} num
 * @return {number[]}
 */
// bf, num很大，会超时
var closestDivisors = function (num) {

    const [a, b] = find(num + 1)
    const [c, d] = find(num + 2)
    return Math.abs(a - b) < Math.abs(c - d) ? [a, b] : [c, d]
    function find(target) {
        let i = 1
        let j = target
        let ans = [i, j]
        while (i < j) {
            i++
            if (target % i !== 0) {
                continue
            }
            j = target / i
            ans = [i, j]
        }
        return ans
    }
};
// 有一个数一定在[1,sqrt(num)]内
var closestDivisors = function (num) {
    const [a, b] = find(num + 1)
    const [c, d] = find(num + 2)
    return Math.abs(a - b) < Math.abs(c - d) ? [a, b] : [c, d]
    function find(target) {
        for (let i = Math.floor(Math.sqrt(target)); i > 0; --i) {
            if (target % i === 0) {
                return [i, target / i]
            }
        }
    }
};
var num = 8
num = 123
num = 999
num = 947592659
var ans = closestDivisors(num)
console.log(ans)