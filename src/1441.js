/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let ans = []
    let x = 1
    let index = 0
    const PUSH = 'Push'
    const POP = 'Pop'
    while (index < target.length) {
        while (x < target[index]) {
            ans.push(PUSH)
            ans.push(POP)
            x++
        }
        ans.push(PUSH)
        index++
        x++
    }
    return ans
};

var target = [1, 3], n = 3
target = [1,2], n = 4
// target = [1, 2, 3], n = 3
var ans = buildArray(target, n)
console.log(ans)