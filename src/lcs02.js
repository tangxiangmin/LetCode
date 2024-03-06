/**
 * @param {number[]} questions
 * @return {number}
 */
var halfQuestions = function (questions) {
    let n = questions.length / 2
    const map = questions.reduce((acc, row) => {
        if (!acc[row]) acc[row] = 0
        acc[row]++
        return acc
    }, {})

    const list = Object.values(map)
    list.sort((a, b) => b - a)

    let ans = 0
    while (n > 0) {
        n -= list[ans]
        ans++
    }
    return ans
};

var questions = [2, 1, 6, 2]
questions = [1,5,1,3,4,5,2,5,3,3,8,6]
var ans = halfQuestions(questions)
console.log(ans)
