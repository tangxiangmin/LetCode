/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    var lastMoment = 0;
    for (var ant of left) {
        lastMoment = Math.Max(lastMoment, ant);
    }
    for (var ant of right) {
        lastMoment = Math.Max(lastMoment, n - ant);
    }
    return lastMoment;
};