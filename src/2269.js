/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    var l = 0
    var r = k
    var str = num.toString()
    var ans = 0
    while(r <= str.length){
        var sub = str.substring(l,r)
        if(num % sub === 0){
            ans++
        }
        l++
        r++
    }
    return ans
};
var num = 240, k = 2

var ans = divisorSubstrings(num, k)
console.log(ans)