/**
 * Created by admin on 2017/6/15.
 */
// 判断链表是否有环
var hasCycle = function(head) {
    var p1,p2;
    p1 = p2 = head;

    while(p1 && p2){
        p1 = p1.next;
        p2 = p2.next;

        if (p2){
            p2 = p2.next;
        }
        if (p1 && p1 === p2){
            return true;
        }
    }
    return false;
};