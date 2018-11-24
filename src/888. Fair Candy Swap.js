// 交换糖果，使得最后糖果size相同

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    function countTotalSize (arr){
        return arr.reduce((acc, item) => {
            return acc += item
        }, 0)
    }

    let sumA = countTotalSize(A);
    let sumB = countTotalSize(B);

    let sizeCount = (sumA + sumB) / 2;

    let diff = Math.abs(sumA - sizeCount);
    let minusTarget = submA - sizeCount > 0 ? A : B, // 需要减少的糖果堆
        addTarget = minusTarget === A ? B : A; 

    let res = []
    for(let i = 0; i < minusTarget.length; ++i){
        for(let j = 0; j < addTarget.length; ++j){
            if (minusTarget[i] === diff + addTarget[j]){
                if(minusTarget == A){
                    res[0] = minusTarget[i];
                    res[1] = addTarget[j];
                }else {
                    res[0] = addTarget[j];
                    res[1] = minusTarget[i];
                }
                
                break
            }
        }
        if(res.length){
            break
        }
    }
    return res
};

