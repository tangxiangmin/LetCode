// J字符串中每个字符表示珍珠、找到S中珍珠的数量
// 思路： BF 或者 hash表
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// bf
var numJewelsInStones = function(J, S) {
    var count = 0
    for (var i = 0; i < S.length; ++i){
        var item = S[i]
        var index = J.indexOf(item, )
        if (index > -1) {
          count++;
        }
    }
    return count
};

// hash
var numJewelsInStones = function(J, S) {
    var hash = {}
    for(var i = 0; i < J.length; ++i){
        hash[J[i]] = true
    }

    var count = 0;
    for (var i = 0; i < S.length; ++i) {
        var item = S[i];
        if (hash[item]) {
          count++;
        }
    }
    return count;
};