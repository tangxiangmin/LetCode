/**
 * Created by admin on 2017/4/17.
 */
// 判断一个数字是否是happy num
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1 // 最后为1，返回true

var isHappy = function(n) {
    var num = "" + n;
    var arr = num.split("");

    var sum = arr.reduce(function(item,item){
        return res*res + item*item;
    });

    if (sum == 1 || sum == n){
        return true;
    }else {
        return isHappy(sum);
    }

};
console.log(isHappy(19));