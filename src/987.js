/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 针对节点root, left ,right
// [left.right] [left] [root, left.right, right.left] [ right] [right.right] 
// 使用中序遍历
var verticalTraversal = function(root) {
    if(!root) return []
    let map = {}
    dfs(root, 0, 0)

    let ans = Object.keys(map).sort((a,b)=>a-b).map((idx)=>{
        let col = map[idx]
        let arr = []
        Object.keys(col).sort((a,b)=>b-a).map(key=>{
            let item = col[key].sort((a,b)=>a-b)
            arr = arr.concat(item)
        })

        return arr
    })
    return ans

    function dfs(node, x, y){
        if(!node) return

        node.x = x
        node.y = y

        if(!map[x]) map[x] = {}

        if(!map[x][y]) map[x][y] = []
        map[x][y].push(node.val)

        const {left, right} = node
        dfs(left, x-1, y-1)
        dfs(right, x+1, y-1)
    }
};