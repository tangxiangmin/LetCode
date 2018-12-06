/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

    function swapStr(str) {
        let swap = str.split("");
        let len = swap.length
        let tmp = swap[0];
        swap[0] = swap[len - 1];
        swap[len - 1] = tmp

        return swap.join('')
    }
    function hasSameChar(str) {
        let hash = {}
        for(let i = 0; i < str.length; ++i){
            let key = str[i]
            if(!hash[key]){
                hash[key] = 0
            }
            hash[key]++
        }
        for(let key in hash){
            if(hash[key] >= 2){
                return true
            }
        }
        return false
    }

    if (A.length !== B.length || !A.length) {
        return false
    }

    if(A===B){
        return hasSameChar(A)
    }else {
        let head = 0,
            tail = A.length - 1

        while (head < tail) {
            if (A[head] !== B[head]) {
                if (A[tail] !== B[tail]) {
                    break
                } else {
                    tail--;
                }
            } else {
                head++
            }
        }

        let diffA = A.slice(head, tail + 1);
        let diffB = B.slice(head, tail + 1);
        return swapStr(diffA) === diffB;
    }
};


// var res = buddyStrings("aaaaaaabc", "aaaaaaacb")
var res = buddyStrings("aa", "aa")
console.log(res)