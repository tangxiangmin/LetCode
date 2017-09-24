/**
 * Created by admin on 2017/9/24.
 */
// 调整二叉树使之单边，且节点都在给定的范围内，需要去除不在范围内的结点，可调整根节点
// 思路，遍历所有节点，排序，有些用例没跑过
    // 参考大神的解法，使用递归并根据根节点的值舍弃
var trimBST = function(root, L, R) {
    if(!root){
        return root;
    }
    if(root.val >= L && root.val <= R) {
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
        return root;
    }
    if(root.val < L)  return trimBST(root.right, L, R);
    if(root.val > R)  return trimBST(root.left, L, R);
}

// var trimBST = function(root, L, R) {
//     if (!root){
//         return root;
//     }
//
//     var nodes = [],
//         rootVal = root.val;
//
//     function inorder(node) {
//         if (node){
//             inorder(node.left);
//             nodes.push(node.val);
//             inorder(node.right);
//         }
//     }
//
//     inorder(root);
//
//     nodes = nodes.filter(item=>{
//       return item >= L && item <= R;
//     });
//
//     if (L === rootVal){
//         var res = new TreeNode(rootVal);
//         nodes.sort((a,b)=>a-b);
//         for(var i = 1; i < nodes.length; ++i){
//             res.right = new TreeNode(nodes[i]);
//         }
//     }else if (R === rootVal){
//         var res = new TreeNode(rootVal);
//         nodes.sort((a,b)=>b-a);
//         for(var i = 1; i < nodes.length; ++i){
//             res.left = new TreeNode(nodes[i]);
//         }
//     }
//
//     return res;
// };