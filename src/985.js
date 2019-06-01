/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    function findEvenSum(arr) {
        return arr.reduce((acc, item) => {
            return acc + (item % 2 ? 0 : item);
        }, 0);
    }
    let answer = [];
    let lastSum = findEvenSum(A); 
    for (let i = 0; i < queries.length; ++i) {
        let [val, index] = queries[i];

        let origin = A[index];
        A[index] += val;

        let isOriginEven = origin % 2 === 0;
        let isCurrentEven = A[index] % 2 === 0;

        // 通过对比改变索引值对应的值，避免每次都重复遍历数组
        let sum;
        if (!isOriginEven && isCurrentEven) {
            sum = lastSum + A[index];
        } else if (isOriginEven && !isCurrentEven) {
            sum = lastSum - origin;
        } else if (isOriginEven && isCurrentEven) {
            sum = lastSum + val;
        } else {
            sum = lastSum ;
        }
        answer.push(sum);
        lastSum = sum;
    }
    return answer;
};

// var res = sumEvenAfterQueries(
//     [1, 2, 3, 4],
//     [[1, 0], [-3, 1], [-4, 0], [2, 3]]
// );
var res = sumEvenAfterQueries([1], [[4,0]])
console.log(res);
