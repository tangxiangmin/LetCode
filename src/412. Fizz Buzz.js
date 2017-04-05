/**
 * https://leetcode.com/problems/fizz-buzz/#/description
 */
var fizzBuzz = function(n) {
    var arr = [];

    for (var i = 1; i <= n; ++i){
        arr.push(handle(i));
    }

    function handle(n){
        if (n%3 == 0 && n%5 !== 0){
            return "Fizz";
        }

        if (n%3 !== 0 && n%5 == 0){
            return "Buzz"
        }

        if (n%15 == 0){
            return "FizzBuzz"
        }

        return n+"";
    }

    return arr;
};