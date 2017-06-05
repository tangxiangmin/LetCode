/**
 * Created by admin on 2017/5/9.
 */
// 合并两个已排序的链表
// 思路：使用递归，根据数值大小进行判断
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }

}