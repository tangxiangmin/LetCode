/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {

    let len = A.length
    let res = -1
    for(let i = 0; i < len; ++i){
        for(let j = 0; j< len; ++j){
            if(j !== i) {
                for(let k = 0; k < len; ++k){
                    if(i != k && j != k){
                        let l = 6 - i - j - k

                        let hour = 10 * A[i] + A[j]
                        let minunte = 10 * A[k] + A[l]
                        if(hour < 24 && minunte < 60){
                            res = Math.max(hour * 60 + minunte, ans)
                        }
                    }
                }
            }
        }
    }
    function padZero(n) {
        return n.toString().padStart(2, 0);
    }
    if(res > -1){
        let hour = Math.floor(res / 60)
        let min = res % 60
        return `${padZero(hour)}:${padZero(min)}`;
    }
    return ''
};

largestTimeFromDigits([1, 2, 3, 4])