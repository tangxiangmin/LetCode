// 给定一个非负数组，排列数组，偶数元素在前，奇数元素在后
// 子数组的顺序不做要求

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let head = 0,
        tail = A.length-1;
    
    function isOdd(num){
        return num % 2 === 1;
    }

    while(head < tail){
        if (isOdd(A[head])) {
            if (isOdd(A[tail])){
                tail--
            }else {
                var tmp = A[head]
                A[head] = A[tail]
                A[tail] = tmp
            }
        }else {
            head++
        }
    }
    return A;
};

var input = [3, 1, 2, 4];
var output = sortArrayByParity(input);
console.log(output);