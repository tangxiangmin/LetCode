/**
 * @param {number} num
 * @return {number}
 */
// 把高位的6改成9
var maximum69Number = function(num) {
    var arr = num.toString().split('')
    for(var i = 0; i < arr.length; ++i){
        var ch = arr[i]
        if(ch == 6){
            arr[i] = 9
            break
        }
    }
    return parseInt(arr.join(''))
};
