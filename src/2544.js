/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    var chars = n.toString().split("")
    var ans = 0
    for(var i = 0; i < chars.length; ++i){
        var ch = Number(chars[i])
        if(i % 2===0){
            ans += ch
        }else {
            ans -= ch
        }
    }
    return ans
};

var n = 521
n = 111
var ans = alternateDigitSum(n)
console.log(ans)