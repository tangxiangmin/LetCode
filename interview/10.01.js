/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

// 思路一:BF 每次从B中取一个数字插入到A的正确位置
var merge = function(A, m, B, n) {
    function insert(n) {
        for (var i = 0; i < A.length; ++i) {
            if (A[i] > n) {
                for (let j = A.length - 1; j > i; --j) {
                    A[j] = A[j - 1];
                }
                A[i] = n;
                m++;
                return;
            }
        }
        A[m] = n;
        m++;
    }
    B.forEach(n => {
        insert(n);
    });
    return A;
};

// 思路二：由于AB都是已经排序的，使用双指针分别遍历A和B，然后将每次挑选的数字添加到新数组即可
var merge = function(A, m, B, n) {
    let ans = []
    let i = 0, j = 0
    while (i < m && j < n){
        if(A[i] < B[j]){
            ans.push(A[i])
            i++
        }else {
            ans.push(B[j])
            j++
        }
    }
    while(i < m) {
        ans.push(A[i])
        i++
    }
    while(j < n) {
        ans.push(B[j])
        j++
    }
    ans.forEach((n, idx)=>{
        A[idx] = n
    })
    return ans
}

var A = [1, 2, 3, 0, 0, 0],
    m = 3;
var B = [2, 5, 6],
    n = 3;

var res = merge(A, m, B, n);
console.log(res);
