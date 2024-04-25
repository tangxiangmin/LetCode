/**
 * @param {number[]} grades
 * @return {number}
 */
// 对数组排序之后，按分数和的限制和可以保证，只需要计算每个分组的数量即可
// 求最大分组，最优情况是每个分组比前面多1个人
var maximumGroups = function (grades) {
    grades.sort((a, b) => a - b)
    const n = grades.length
    let cnt = 1
    let sum = 0
    while (sum < n) {
        sum += cnt
        cnt++
    }
    if (sum > n) {
        cnt--
    }
    return cnt - 1
};

var grades = [10, 6, 12, 7, 3, 5]
grades = [8, 8]
var ans = maximumGroups(grades)
console.log(ans)