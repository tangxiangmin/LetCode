/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    var ans = 0;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        ans++
    }
    return ans;
};

var num1 = 2,
    num2 = 3;
    num1 = 10, num2 = 10
var ans = countOperations(num1, num2);
console.log(ans);
