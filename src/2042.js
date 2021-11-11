/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {

    var tokens = s.split(' ')

    var lastNum = 0
    for(var i = 0; i < tokens.length; ++i){
        var token = tokens[i]
        if(/^\d+$/.test(token)){
            var num = parseInt(token)
            if(lastNum >= num){
                return false
            }
            lastNum = num
        }
    }
    return true
};

var s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
s = "hello world 5 x 5"
var ans = areNumbersAscending(s)
console.log(ans)