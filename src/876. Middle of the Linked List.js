// 给定非空单链表的头结点，返回中间位置节点（如果有两个，则返回第二个）


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let linkArr = []
    let node = head
    while(true){
        linkArr.push(node)
        node = node.next
        if (!node){
            break
        }
    }
    let len = linkArr.length
    let index = len % 2 ? Math.floor(len / 2) : (len / 2 );
    return linkArr[index]
};