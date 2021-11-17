/**
 * @param {string} s
 * @return {boolean}
 */
// 就是0后面不能有1
 var checkOnesSegment = function(s) {

    for(var i = 1; i < s.length; ++i){
        if(s[i-1] < s[i]){
            return false
        }
    }
    return true
};