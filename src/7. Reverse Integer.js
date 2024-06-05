// 翻转数字，保持符号，省略开头的0,如果溢出则返回0

// 思路1：字符串翻转
// 思路2：位数翻转

/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     var isNegative = x < 0 ? -1 : 1;

//     var str = Math.abs(x).toString()
//     var res = str.split("").reverse().join("") * isNegative;
    
//     return res;
// };

var reverse = function(x) {
    var max = Math.pow(2, 31) - 1
    var res = 0

    while(x){
        var tail = x%10 
        res = res * 10 + tail;
        if (Math.abs(res) > max) {
            return 0;
        }
        x = (x - tail)/10; 
    }

    return res
}

reverse(123);
