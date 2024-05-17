/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 本质上是求小于[1,k)的数组中，有多少个是两两相加不等于k的，然后再用大于k的最小数字补齐长度到n
// 直接贪心取[1,n/2]的部分再拼接最后[k,k+prevLen]的部分
var minimumSum = function (n, k) {

    const end = Math.floor(k / 2)

    let cnt = 0
    sum = 0
    for (let i = 1; i <= end; ++i) {
        cnt++
        sum += i
        if (cnt === n) return sum
    }
    let i = k
    while (cnt < n) {
        sum += i
        i++
        cnt++
    }
    return sum
};
var n = 5, k = 4
n = 2, k = 6
var ans = minimumSum(n, k)
console.log(ans)
