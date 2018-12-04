// 判断是否是Mountain 数组

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if(A.length < 3){
        return false
    }

    var target = -1
    for(let i = 1; i < A.length - 1;++i){
        if(target === -1){
            if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
                if (target == -1) {
                    target = i
                }
            }else if(A[i] < A[i-1]){
                return false
            }
        }else {
            if(A[i] <= A[i+1]){
                return false
            }
        }
    }

    return target !== -1
};