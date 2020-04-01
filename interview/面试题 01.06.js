/**
 * @param {string} S
 * @return {string}
 */
// https://leetcode-cn.com/problems/compress-string-lcci/
var compressString = function(S) {
    if(!S) return ''
    var stack = [S[0]]
    var ans = ''
    for(var i = 1; i <= S.length; ++i){
        var ch = S[i]
        var top = stack[stack.length-1]
        if(ch === top){
            stack.push(ch)
        }else {
            ans += `${top}${stack.length}`
            stack = [ch]
        }
    }
    return ans.length < S.length ? ans : S
};

var s = "aabcccccaa"
var res = compressString(s)
console.log(res)