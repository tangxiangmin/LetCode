// 给定一个非负数c,判断是否存在a,b整数，满足a^2 + b^2 = c;
// 思路：取中数然后判断结果
var judgeSquareSu  = function(c) {
    var mid = Math.floor(Math.sqrt(c));
    for(var i = 0, j = mid;i <= j;){
        var sum = Math.pow(i, 2) + Math.pow(j,2);
        if (sum > c){
            j--;
        }else if (sum < c){
            i++;
        }else {
            return true;
        }
    }
    return false;
};

var 