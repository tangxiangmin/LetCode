/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    var ans = ""
    var best = ""
    for(var i = 0; i < number.length; ++i){
        var ch = number[i]
        if(ch === digit){
            best = number.substring(0,i) + number.substring(i+1)
            if(i < number.length - 1 && number[i + 1] > ch){
                return best
            }
            ans = best

        }
    }
    return ans
};

// var number = "123", digit = "3"
var number = "1212", digit = "1"
var ans = removeDigit(number,digit)
console.log(ans)