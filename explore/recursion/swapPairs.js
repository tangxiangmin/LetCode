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
var swapPairs = function(head) {
  if (!head) {
      return;
  }
  if (!head.next) {
      return head;
  }
  // 交换头结点
  var next = head.next;
  head.next = next.next;
  next.next = head;
  head.next = swapPairs(head.next);

  return next;
};
