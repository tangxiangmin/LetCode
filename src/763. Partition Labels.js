// 给定一个字符串并分词，要求每个字母只能出现在一个分组内，且分组并可能多


// 思路：从第一个字符开始，找到该字符出现的最后位置，然后判断该分组是否符合要求
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {

    var res = []
    var first = S[0]
    var lastIndex = S.lastIndexOf(first)

    function isValid(letter, substr){
        return substr.indexOf(letter) === -1
    }

    var group = S.slice(0, lastIndex+1)
    
    var substr = s.slice(lastIndex+1)
    var len = group.length
    for (var i = 0; i <  len; ++i){
        if(!isValid(group[i], substr)){
            // 不符合要求，需延长group，缩短substr
            len++
            break
        }

    }

};