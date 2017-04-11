/**
 * Created by admin on 2017/4/11.
 */

// 删除单链表中的某个节点
// 没有给定链表，相当于需要不使用前节点就删除指定节点，直接用后节点覆盖就可以了

var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next;
};