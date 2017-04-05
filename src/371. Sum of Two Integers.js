/**
 * https://leetcode.com/problems/sum-of-two-integers/#/description
 */
var getSum = function(a, b) {
    var carry, add;
    do {
        add = a ^ b;
        carry = (a & b) << 1;
        a = add;
        b = carry;
    } while(carry !== 0);
    return add;
};