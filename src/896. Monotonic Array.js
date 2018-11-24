// 判断一个数组是否是单调递增或递减


/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    if(A.length <= 1){
        return true
    }

    let flag1 = -1; 
    for(let i = 1; i < A.length-1; ++i){
        if (A[i] === A[i + 1]){
            continue
        }else {
            if(flag1 === -1){
                flag1 = A[i] > A[i + 1]
            }else {
                if (A[i] > A[i + 1] !== flag1) {
                    return false;
                }
            }
        }
    }
    return true
};