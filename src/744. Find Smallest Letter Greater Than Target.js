// 找到比给定值大的最小字符，列表是已排序且环绕的，即 a > z

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var i = 0,
        len = letters.length;
    for (; i < len; ++i) {
        var letter = letters[i];
        if (letter > target){
            return letter
        }
    }

    if (i == len){
        return letters[0]
    }

};