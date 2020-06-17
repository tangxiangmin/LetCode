/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    var a = 1
    var b = n - a
    while(hasZero(b)){
        a++
        while(hasZero(a)){
            a++
        }

        b = n -a
    }

    return [a, b]
    
    function hasZero(num){
        return /0/.test(num.toString())
    }
    
};

var n = 4102
console.log(getNoZeroIntegers(n))