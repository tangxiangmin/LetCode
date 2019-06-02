/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function getInput(s){
        var res = ''
        for(var i = 0; i < s.length; ++i){
            var c = s[i]
            if(c === '#'){
                res = res.substr(0, res.length - 1)
            }else {
                res += c
            }
        }
        return res
    }
    return getInput(S) === getInput(T)
};
var S = "abc", T = "ad#c";

console.log(backspaceCompare(S, T));
