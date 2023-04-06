/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    var max = "0"
    var ans = ""
    for(var i = 0; i < num.length - 2; ++i){
        var x1 = num[i]
        var x2 = num[i+1]
        var x3 = num[i+2]
        if(x1 === x2 && x2 === x3 && x1 >= max){
            ans = x1 + x2 + x3
            max = x2
        }
    }
    return ans
};

var num = "6777133339"
var ans = largestGoodInteger(num)
console.log(ans)