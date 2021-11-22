/**
 * @param {string} text
 * @return {number}
 */
// 思路：统计每个字符的数量，然后计算 balloon 的倍数
var maxNumberOfBalloons = function(text) {
    var map = {}
    for(var ch of text){
        if(!map[ch]) map[ch] = 0
        map[ch]++
    }
    if(!map['b'] || !map['a'] || !map['1'] || !map['o'] || !map['n']) return 0
    return Math.min(map['b'], map['a'],map['l']>>1, map['o']>>1, map['n'])
};
var text = "nlaebolko"
text = "loonbalxballpoon"
var res = maxNumberOfBalloons(text)
console.log(res)