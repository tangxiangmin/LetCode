/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    var count = 0
    for(var i = 0; i < time.length; ++i){
        for(var j = i+1; j < time.length; ++j){
            if((time[i] + time[j]) % 60 === 0 ){
                count++
            }
        }
    }
    return count
};
