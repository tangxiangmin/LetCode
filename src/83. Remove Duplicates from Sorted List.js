/**
 * Created by admin on 2017/4/20.
 */
// 移除一个排序列表中重复的数
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }

    var tmp = head;
    while(head.next){
        var next = head.next;
        if (head.val === next.val){
            head.next = next.next;
        }else {
            head = next;
        }
    }
    return tmp;
};