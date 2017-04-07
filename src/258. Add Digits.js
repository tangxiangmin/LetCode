/**
 * Created by admin on 2017/4/7.
 */
var reduce = Array.prototype.reduce;
var addDigits = function(num) {
    num += '';
    var sum = reduce.call(num, function (acc, val) {
        val -= 0;
        return acc + val;
    }, 0);

    if (sum >= 10){
        return addDigits(sum);
    }else {
        return sum;
    }
};

console.log(addDigits(38));