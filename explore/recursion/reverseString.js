/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length <= 1){
        return s
    } 
    return reverseString(s.substr(1)) + s[0];
};

// console.log(reverseString("hello"))