/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    var map = {}
    for(var ch of s){
        if(!map[ch]) map[ch] = 0
        map[ch]++
        if(map[ch] === 2){
            return ch
        }
    }
};

var s = "abccbaacz"
var ans = repeatedCharacter(s)
console.log(ans)