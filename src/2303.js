/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    var ans = 0;
    var preSum = 0;
    for (var [step, tax] of brackets) {
        var val = Math.min(step, income)
        ans += (tax / 100) * (val - preSum);
        preSum = val;
    }
    return ans;
};

var brackets = [
        [3, 50],
        [7, 10],
        [12, 25],
    ],
    income = 10;
    brackets = [[1,0],[4,25],[5,50]], income = 2
var ans = calculateTax(brackets, income);
console.log(ans);