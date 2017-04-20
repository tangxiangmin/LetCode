/**
 * Created by admin on 2017/4/17.
 */
// 判断一个数字是否是happy num
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1 // 最后为1，返回true

var isHappy = function(n) {

    var tmp = {};

    function checkCircle(n) {
        var num = "" + n,
            arr = num.split(""),
            sum = 0;
        arr.forEach((val)=>{
            sum += Math.pow(val, 2);
        });
        if (tmp[sum]){
            return false;
        }

        tmp[sum] = true;
        return sum === 1 ? true : checkCircle(sum);
    }
    return checkCircle(n);

};
console.log(isHappy(2));