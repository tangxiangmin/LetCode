/**
 * @param {number[]} actions
 * @return {number[]}
 */
var trainingPlan = function (actions) {
    const n = actions.length
    let l = 0
    let r = n - 1
    while (l < r) {
        while (actions[l] % 2 == 1 && l < r) {
            l++
        }
        while (actions[r] % 2 == 0 && l < r) {
            r--
        }
        const tmp = actions[l]
        actions[l] = actions[r]
        actions[r] = tmp
    }
    return actions
};
var actions = [1, 2, 3, 4, 5]
var ans = trainingPlan(actions)
console.log(ans)