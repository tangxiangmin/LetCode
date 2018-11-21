// 数组排序，数组元素奇偶性与索引的奇偶性保持一致

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var head = 0,
        cursor = head;
    function isOdd(num) {
        return num % 2 === 1;
    }

    while (head < A.length && cursor < A.length) {
        var flag = isOdd(A[head]);
        if (isOdd(head) !== flag) {
            if (isOdd(A[cursor]) === isOdd(head)) {
                var tmp = A[head];
                A[head] = A[cursor];
                A[cursor] = tmp;

                head++;
                cursor = head;
            } else {
                cursor++;
            }
        } else {
            head++;
            cursor++;
        }
    }
    return A;
};
var input = [4, 2, 5, 7];
var input = [3, 4];
var output = sortArrayByParityII(input);
console.log(output);
