/**
 * Created by admin on 2017/4/11.
 */

// 10进制转7进制
var convertToBase7 = function(num) {
    var str = "";
    var tmp = num;
    if (num < 0) {
        num = -num;
    }
    do{
        res = Math.floor(num/7);
        str = num%7 + str;
        num = res;
    }while(res !== 0);

    if (tmp < 0) {
        str = "-" + str;
    }

    return str;
};

console.log(convertToBase7(100));