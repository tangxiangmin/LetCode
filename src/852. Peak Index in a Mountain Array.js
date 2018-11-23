// 给定一个山峰数组，求峰值的index
// 山峰数组 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    for(let i = 1; i < A.length - 1; ++i) {
        if(A[i] > A[i-1] && A[i] > A[i+1]) {
            return i
        }
    }
};
