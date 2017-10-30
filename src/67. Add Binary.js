// 给定两个二进制数的字符串，返回他们的和
// 思路：考察二进制加法进位
// 方案1：将二进制转换为10进制然后使用toString，貌似长度会溢出
// 方案2：老老实实模拟二进制计算

// var addBinary = function (a, b) {
//     function bin2dec(n){
//         n = String(n);
//         var len = n.length;
//         var res = 0;
//         for (var i = 1; i <= len; ++i){
//             res += n[i-1]*Math.pow(2, len-i);
//         }


//         return res;
//     }


//     a = bin2dec(a);
//     b = bin2dec(b);

//     return (a+b).toString(2);

// };
var addBinary = function (a, b) {
    var isCarry = 0;
    var la = a.length - 1,
        lb = b.length - 1;

    var res = "";
    while (isCarry == 1 || la >= 0 || lb >= 0) {
        isCarry += la >= 0 ? a[la--] - 0 : 0;
        isCarry += lb >= 0 ? b[lb--] - 0 : 0;
        res = isCarry%2 + res;

        isCarry = Math.floor(isCarry / 2);
    }

    return res;
}


// var res = addBinary("11", "1");
var res = addBinary("11", "0");
console.log(res)