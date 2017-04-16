/**
 * Created by admin on 2017/4/16.
 */
// 把整数转换为十六进制
// 使用补码表示负数

var toHex = function(num) {
    var res = "";
    
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
    
    while(num){
        res = NumCode(num%16)+ res;
        num = Math.floor(num/16);
    }
    return res;
};

console.log(toHex(26));
