/**
 * Created by admin on 2017/4/16.
 */

// 给定两个用字符串表示的整数，计算他们之和
// 不能使用语言内置的BigInteger库或者直接将输入转为整数
// 貌似就是考察进位

var addStrings = function(num1, num2) {

    var len1 = num1.length - 1,
        len2 = num2.length - 1;

    var res = "";
    // 是否进位
    var isCarray = false;
    for (var i = len1, j = len2; i >= 0 || j >= 0; --i, --j){

        var val1 = i >= 0?(num1[i] - 0):0,
            val2 = j >= 0?(num2[j] - 0):0;

        var sum =  val1 + val2;

        if (isCarray){
            sum += 1;
        }

        if (sum  >= 10){
            sum -= 10;
            isCarray = true;
        }else {
            isCarray = false;
        }

        res = sum + res;
    }
    if (isCarray){
        res = 1 + res;
    }
    return res;
}
console.log(addStrings("9", "99"));