/**
 * @param {number[]} postorder
 * @return {boolean}
 */
// 二叉搜索树，后续遍历，最后一个是根节点，那个数组中左边比根节点小，右边比根节点大，拆分左右子树，再递归判断
var verifyTreeOrder = function (postorder) {
    if (postorder.length <= 1) return true
    const root = postorder[postorder.length - 1]
    let l = 0
    while (postorder[l] < root) {
        l++
    }
    let r = postorder.length - 2
    while (postorder[r] > root) {
        r--
    }

    return l - 1 === r && verifyTreeOrder(postorder.slice(0, l)) && verifyTreeOrder(postorder.slice(l, postorder.length - 1))
};
// 思路可以在上面的思路上，通过递归函数传入索引值来计算，避免slice数组带来额外的消耗
var verifyTreeOrder = function (postorder) {
    function dfs(i, j) {
        if (i >= j) {
            return true
        }
        p = i
        while (postorder[p] < postorder[j]) {
            p += 1
        }
        m = p
        while (postorder[p] > postorder[j]) {
            p += 1
        }
        return p == j && dfs(i, m - 1) && dfs(m, j - 1)

    }
    return dfs(0, postorder.length - 1)
}

var postorder = [4, 6, 5, 9, 8]
// postorder = [4, 9, 6, 5, 8]
postorder = [1, 2, 5, 10, 6, 9, 4, 3]
postorder = [4, 6, 7, 5]
var ans = verifyTreeOrder(postorder)
console.log(ans)