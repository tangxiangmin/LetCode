/**
 * @param {number[]} salary
 * @return {number}
 */
// 思路：题目每个数都是唯一的，则可以在一次遍历中计算sum、min和max，然后求平均值即可
var average = function (salary) {
    var sum = 0;
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < salary.length; ++i) {
        var cur = salary[i]
        if(cur < min) {
            min = cur
        }
        if(cur > max){
            max = cur
        }
        sum += cur
    }
    return (sum - min - max) / (salary.length - 2)
};
