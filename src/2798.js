/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {

    let ans = 0
    for (const hour of hours) {
        if (hour >= target) {
            ans++
        }
    }
    return ans
};