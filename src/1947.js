/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
// 思路：本身是个排列组合，计算每个组合的兼容性最大值
var maxCompatibilitySum = function (students, mentors) {

    function calc(stu, men) {
        let ans = 0
        for (let i = 0; i < stu.length; ++i) {
            if (stu[i] === men[i]) {
                ans++
            }
        }
        return ans
    }

    const visited = []
    const n = students.length
    const scores = new Array(n).fill([0, -1])
    let ans = 0
    // 第i个学生,第j个老师
    function backtrack(i, j) {
        if (i >= n) {
            return
        }
        for (let j = 0; j < n; ++j) {
            if (visited[j]) continue
            const score = calc(students[i], mentors[j])
            const [s, idx] = scores[i]
            if (s < score) {
                visited[j] = true
                visited[idx] = false
                scores[i] = [score, j]
            }
        }
        backtrack(i + 1)
    }
    for (let i = 0; i < n; ++i) {
        backtrack(i) // todo 还需要处理其他学生优先匹配的问题
    }

    return ans

};
var students = [[1, 1, 0], [1, 0, 1], [0, 0, 1]], mentors = [[1, 0, 0], [0, 0, 1], [1, 1, 0]]
students = [[0, 0], [0, 0], [0, 0]], mentors = [[1, 1], [1, 1], [1, 1]]
students = [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 1, 0]], mentors = [[1, 0, 1], [0, 1, 1], [0, 1, 0], [1, 1, 0]]
var ans = maxCompatibilitySum(students, mentors)
console.log(ans)