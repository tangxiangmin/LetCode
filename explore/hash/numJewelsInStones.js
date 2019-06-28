/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewel = new Set();
    for (var i = 0; i < J.length; ++i) {
        var c = J[i];
        jewel.add(c);
    }
    var ans = 0;
    for (var i = 0; i < S.length; ++i) {
        var c = S[i]
        if(jewel.has(c)){
            ans++
        }
    }
    return ans
};
