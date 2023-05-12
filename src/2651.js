/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    var ans = arrivalTime + delayedTime;
    if (ans >= 24) {
        ans -= 24;
    }
    return ans;
};

var arrivalTime = 15,
    delayedTime = 5;
(arrivalTime = 13), (delayedTime = 11);
var ans = findDelayedArrivalTime(arrivalTime, delayedTime);
console.log(ans);
