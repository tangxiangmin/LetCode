
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(!s) return ""
    var numStack = []
    var strStack = []
    var num = ''
    var str = ''
    for(var i = 0; i < s.length; ++i){
        var ch = s[i]
        if(/\d/.test(ch)){
            num += ch
        }else if(ch === '['){
            numStack.push(num)
            strStack.push('')
            num = ''
        }else if(ch !== ']'){
            if(!strStack.length) {
                strStack.push(ch)
            }else {
                strStack[strStack.length - 1] += ch
            }
        }else {
            var n = numStack.pop()
            var str = strStack.pop()

            if(!strStack.length) {
                strStack.push(str.repeat(n))
            }else {
                strStack[strStack.length - 1] += str.repeat(n)
            }
        }
    }
    return strStack.pop()
};

var s = "3[a2[c]]"

// s = "3[a]2[bc]"
s = "leetcode"

var res = decodeString(s)

console.log(res)