/**
 * Created by admin on 2017/6/13.
 */
// 给定一个数组表示非负整数，其高位在数组的前面，对这个整数加1
// 思路：原本想将数组转换成字符串再进行计算，然后发现数字过大会溢出，所以还是老老实实的遍历吧
var plusOne = function(digits) {
    var len = digits.length;

    if (++digits[len - 1] >= 10){
        for (var i = len - 1; i >= 0; --i){
            digits[i] -= 10;
            if (i == 0){
                digits.unshift(1);
            }else {
                if (++digits[i - 1] < 10){
                    break;
                }
            }
        }
    }
    return digits
};

var test = [9];
console.log(plusOne(test));
