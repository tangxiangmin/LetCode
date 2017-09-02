/**
 * Created by admin on 2017/9/2.
 */
// 单词匹配
// 给定一个模式和一个字符串，判断字符串是否符合该模式
// 比如AABB 可以匹配 'he he ha ha'

// 直接将单词拆分成数组，然后转换成对应的值再比较

var wordPattern = function(pattern, str) {
    var patternArr = pattern.split(""),
        wordArr = str.split(" ");

    function parse(arr) {
        var map = {},
            res = '',
            count = 0;
        for (var i = 0; i < arr.length; ++i){
            var val = arr[i];
            if(!map[val]){
                map[val] = ++count;
            }
            res += map[val];
        }

        return res;
    }

    var s1 = parse(patternArr),
        s2 = parse(wordArr);

    return s1 == s2;
};

var pattern = "abba",
    str = "dog cat cat fish";

console.log(wordPattern(pattern, str))