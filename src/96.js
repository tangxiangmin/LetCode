/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    var memo = {
        0: 1,
        1: 1,
    }
 
    var ans = root(n)

    return ans

    // 以i为root组合二叉树的方式
    function root(n) {
        if (memo[n]) {
            return memo[n]
        }
        var ans = 0
        for (var i = 0; i < n; ++i) {
            ans += root(i) * root(n - i - 1)
        }
        memo[n] = ans
        return ans

    }
};
var n = 3 // 5
// n = 4 // 14
var res = numTrees(n)
console.log(res)

// 思路:找到组成子树的几种方式
// 假设n个节点存在二叉排序树的个数是G(n)，1为根节点，2为根节点，...，n为根节点，当1为根节点时，其左子树节点个数为0，右子树节点个数为n-1，同理当2为根节点时，其左子树节点个数为1，右子树节点为n-2，所以可得
// G(n) = G(0)*G(n-1)+G(1)*(n-2)+...+G(n-1)*G(0)