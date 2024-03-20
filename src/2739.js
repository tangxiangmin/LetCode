/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {

    let ans = 0
    while (mainTank > 0) {
        ans += Math.min(mainTank, 5) * 10
        mainTank -= 5

        if (mainTank >= 0 && additionalTank > 0) {
            additionalTank--
            mainTank += 1
        }
    }
    return ans

};
var mainTank = 5, additionalTank = 10
mainTank = 1, additionalTank = 2
mainTank = 9, additionalTank = 2

var ans = distanceTraveled(mainTank, additionalTank)
console.log(ans)