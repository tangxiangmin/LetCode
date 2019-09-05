/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
     if (N == 1) return 0;
     return (~K & 1) ^ kthGrammar(N - 1, (K + 1) / 2);
};
