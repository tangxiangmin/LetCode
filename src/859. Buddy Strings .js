/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length || !A.length) {
        return false
    }
    if(A.length === 2){
        if(A === B){
            return A[0] == A[1] 
        }
    }

    let head = 0,
        tail = A.length-1
    let isSwap = false
    
    while(head < tail){
        if (A[head] !== B[head]) {
            if (A[tail] !== B[tail]) {
                isSwap = true
                break
            } else {
                tail--;
            }
        } else {
            head++
        }
    }
    return isSwap && A[head] === B[tail] && A[tail] === B[head] && A.slice(head + 1, tail - 1) === B.slice(head + 1, tail - 1);
};


var res = buddyStrings("aaaaaaabc","aaaaaaacb")
console.log(res)