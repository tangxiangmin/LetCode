/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length <= 1) return true
    arr.sort((a,b)=>a-b)
    var diff = arr[1] - arr[0]
    for(var i = 1; i< arr.length-1; ++i){
        var cur = arr[i]
        var next = arr[i+1]
        if(next - cur !== diff) return false
    }
    return true
};