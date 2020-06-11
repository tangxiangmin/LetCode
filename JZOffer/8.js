// 给定一棵二叉树和其中的一个结点，如何找出中序遍历顺序的下一个结点？树中的结点除了有两个分别指向左右子结点的指针以外，还有一个指向父结点的指针。

// 思路1：先中序遍历，然后找到node在遍历列表中的索引值，根据索引值的下一个节点，需要空间O(n)
function solution(root, node) {
    var arr = [];
    inorder(root)
    var idx = arr.indexOf(node);
    return idx < arr.length - 1 ? arr[idx + 1] : null

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        arr.push(node);
        inorder(node.right);
    }
}

// 思路2：由于每个节点保存了父节点的引用，因此在中序遍历中
// 如果node存在右子节点，则下一个节点就是他的右子树最左侧叶子节点
// 如果node不存在子节点，判断node是否为父节点的左子节点
//      如果是，则返回父节点
//      如果不是，则需要逐步判断父节点的父节点...当父节点作为其父节点的左节点时，则直接返回父节点的父节点；如果不是，则继续向上查找

function solution(root, node){
    if(node.right){
        return findLeftLeafNode(node.right)
    }
    var parent = node.parent
    if(!parent) return null

    if(node === parent.left){
        return parent
    }else {
        var cur = parent
        while(cur && cur.parent){
            if(cur === cur.parent.left){
                return cur.parent
            }else {
                cur = cur.parent
            }
        }

        return parent ? parent.left : null
    }

    function findLeftLeafNode(node){
        if(!node.left || !node.right){
            return node
        }
        return node.left ? findLeftLeafNode(node.left) : findLeftLeafNode(node.right)
    }

}
