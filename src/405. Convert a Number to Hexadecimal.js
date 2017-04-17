/**
 * Created by admin on 2017/4/16.
 */
// 把整数转换为十六进制
// 使用补码表示负数

var toHex = function(num) {
    function NumCode(n) {
        n -= 0;
        if (n < 10){
            return n;
        }
        switch (n){
            case 10:
                return "a";
            case 11:
                return "b";
            case 12:
                return "c";
            case 13:
                return "d";
            case 14:
                return "e";
            case 15:
                return "f";
        }
    }

    function ten2bin(num) {
        var res = "";

        while(num){
            res = num%2 + res;
            num = Math.floor(num/2);
        }
        return res;
    }

    function bin2hex(num) {
        var res = "",
            count = 0,
            len = num.length;

        for (var i = len - 1, j = 0; i >= 0; --i, ++j){
            var val = num[i];
            count += val * Math.pow(2, j);

            if (j === 3){
                count = NumCode(count);
                res = count + res;
                j = -1;
                count = 0;
            }
        }
        // 去除左侧多余的0
        res = removeZero(res);
        return res;
    }
    function removeZero(num) {
        var i = 0,
            len = num.length;
        for (; i < len; ++i){
            if (num.charAt(i) != 0){
                num = num.substr(i);
                break;
            }
        }
        if (i == len){
            return "0";
        }
        return num;
    }
    
    function complement(num) {
        num = num.split("");
        var flag = false;

        for (var i = num.length - 1; i >= 0; --i){
            if (flag){
                num[i] = -(num[i]-1);
            }

            if (num[i] === "1"){
                flag = true;
            }
        }

        return num.join("");
    }
    function fillZero(num, bit) {
        var len = num.length;
        if(len < 32){
            for (var i = 0; i < 32-len; ++i){
                num = "0"+ num;
            }
        }
        return num;
    }

    // 计算结果
    var res = "",
        val = num;

    num = Math.abs(num);
    res = ten2bin(num);
    res = fillZero(res, 32);
    // 负数补码
    if (val < 0) {
        res = complement(res);
    }
    // 二进制转十六进制
    res = bin2hex(res);
    return res;
};

console.log(toHex(26));
