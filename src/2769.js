/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
// 思路，要找的最大值，则每次操作都是将x减少1，然后将num增加1
var theMaximumAchievableX = function (num, t) {
    return num + t * 2
};