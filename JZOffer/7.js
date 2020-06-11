// 根据前序遍历和中序遍历的结果重建二叉树，假设树中不包含重复数字

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 思路：根据前序遍历和中序遍历的特点，可知 preorderList[0] 为根节点root，
// 然后在中序遍历的列表中找到inorderList.indexOf(root)索引值为idx，则inorderList.slice(0, idx)为左子树，然后根据左子树的长度确定前序遍历的右子树列表；
// 同理可以得到右子树的前序遍历和中序遍历列表，通过递归构建左子树和右子树，最后完成整个树的构建
function solution(preorderList, inorderList) {
    if (!preorderList.length) return null;
    var rootVal = preorderList[0];
    var idx = inorderList.indexOf(rootVal);
    var lInorderList = inorderList.slice(0, idx);
    var rInorderList = inorderList.slice(idx + 1);

    var lPreorderList = preorderList.slice(1, lInorderList.length + 1);
    var rPreorderList = preorderList.slice(lInorderList.length+1);

    var root = new Node(rootVal)
    root.left = solution(lPreorderList, lInorderList)
    root.right = solution(rPreorderList, rInorderList)
    
    return root
}
