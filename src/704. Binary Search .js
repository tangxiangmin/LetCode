// 实现二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let head = 0,
        tail = nums.length - 1;

    while(head <= tail){
        let mid = Math.floor((head + tail) / 2);
        if(target < nums[mid]){
            tail = mid - 1
        }else if(target > nums[mid]){
            head = mid + 1
        }else {
            return mid
        }
    }
    return -1
};