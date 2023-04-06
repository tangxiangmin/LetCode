/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    var sMap = getWordCharMap(s)
    var count = 0

    while(true) {
        for(var ch of target){
            if(!sMap[ch]) return count
            sMap[ch]--
        }
    
        count++
    }

    function getWordCharMap(w) {
        var map = {};
        for (var ch of w) {
            if (!map[ch]) {
                map[ch] = 0;
            }
            map[ch]++;
        }
        return map;
    }

};

var s = "ilovecodingonleetcode", target = "code"
s = "abcba", target = "abc"
s = "abbaccaddaeea", target = "aaaaa"
s = "abc", target = "abcd"
var ans = rearrangeCharacters(s, target)
console.log(ans)