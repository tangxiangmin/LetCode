/**
 * Created by admin on 2017/5/19.
 */
// 判断一棵树是不是另外一棵树的子树，需要保证所有节点均被子树包含
// 通过遍历将树转换成字符串，然后判断子字符串即可，为了满足条件需要处理叶子节点

var isSubtree = function(s, t) {
    const DELIMITER = ' ';

    function preorder(node, isLeft) {
        if (!node){
            return isLeft ? 'lNull' : 'rNull';
        }
        return "#" + node.val + DELIMITER + preorder(node.left, true) + DELIMITER + preorder(node.right, false);
    }

    var sStr = preorder(s, true),
        tStr = preorder(t, true);


    return sStr.indexOf(tStr) >= 0 ;
};