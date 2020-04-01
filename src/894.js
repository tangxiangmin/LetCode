/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
// 包含N个节点的满二叉树，满二叉树的左右子树也是满二叉树
var allPossibleFBT = function(N) {
    if(N === 0) return []
    if(N % 2 === 0) return []
    if(N === 1)  return [new TreeNode(0)]
    if(N === 3){
        var root = new TreeNode(0)
        root.left = new TreeNode(0)
        root.right = new TreeNode(0)
        return [root]
    }

    var ans = []
    // todo 考虑子树的各种形状
   
    let subTree = allPossibleFBT(N-2) // 根节点和右节点各占一个

    subTree && subTree.forEach(node=>{
        var root1 = new TreeNode(0)
        root1.left = clone(node)
        root1.right = new TreeNode(0)

        ans.push(root1)

        var root2 = new TreeNode(0)
        root2.right = clone(node)
        root2.left = new TreeNode(0)
        ans.push(root2)
    })

    let sub2 = allPossibleFBT((N-1) / 2)
    sub2 && sub2.forEach(node=>{
        var root = new TreeNode(0)
        root.left = clone(node)
        root.right = node
        ans.push(root)
    })

    return ans 
    // 克隆一棵二叉树
    function clone(root){
        if(!root) return null
        let root1 =  new TreeNode(root.val)
        root1.left = clone(root.left)
        root1.right = clone(root.right)
        return root1
    }
    
};