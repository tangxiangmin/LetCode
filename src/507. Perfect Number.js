/**
 * Created by admin on 2017/7/9.
 */
// 一个数，如果他等于其正因子之和，则被称为完美数，判断给定的数字是否是完美数
// 答案有人用查表法，给大佬跪了
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    function getDivisors(num) {
        var res = [];
        for (var i = 1; i <= Math.sqrt(num); ++i){
            if(num%i == 0){
                res.push(i);

                // 这里主要根据题意，剔除数字本身
                if (i !== 1){
                    res.push(Math.floor(num / i));
                }
            }
        }
        return res;
    }
    return getDivisors(num).reduce(function (val, acc) {
            return val + acc;
        }, 0) === num;
};

var test = 28;
console.log(checkPerfectNumber(test));