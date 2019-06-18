/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var head = 0
    var tail = s.length - 1

    function swap(i,j){
        var tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
    }
    while(head < tail){
        swap(head, tail)
        head++
        tail--
    }
    return s
};
