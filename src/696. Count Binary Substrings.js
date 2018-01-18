// 给定一个字符串，找到满足下列条件的子字符串的长度:
// 1 和 0 数目相等，且所有的1连续，所有的1也连续(单独也算连续)

// 思路:符合条件的字串满足其中间组合为01或10 del
// 思路：对连续字符进行分组，然后进行判断
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

    function findGroup(str) {
        var res = [],
            sum = 1;
        for (var i = 0; i < str.length - 1; ++i){
            if (str[i] != str[i+1]){
                res.push(sum);
                sum = 1
            }else {
                sum++
            }
        }
        res.push(sum);
        return res;
    }
    var group = findGroup(s);
    var res = 0;
    for (var i = 0; i < group.length-1; ++i){
        res += Math.min(group[i], group[i+1])
    }
    
    return res;
};

countBinarySubstrings('01100');