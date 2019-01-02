/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let ans = 0;
    let a = [];
    answers.forEach(function(v) {
        if (a[v]) {
            a[v]--;
        } else {
            ans += (a[v] = v) + 1;
        }
    });
    return ans;
};
var input = [1, 0, 1, 0, 0]
numRabbits(input)
