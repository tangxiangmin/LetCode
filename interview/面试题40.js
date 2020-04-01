/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a,b)=>a-b).slice(0,k)
};