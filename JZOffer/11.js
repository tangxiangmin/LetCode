// 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

// 思路1：求数组的最小值，直接遍历,O(n)，这种思路没有理由旋转数组的特性
function solution(arr) {
    return Math.min(...arr);
}

// 思路2：由于数组是某个非递减排序数组，则其旋转数组可以分成两个非递减子数组，两个数组的分界点就是最小元素，
// 所以一种方法是找到arr[i] < arr[i-1]时，对应的arrr[i]就是最小值
function solution(arr) {
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[i - 1]) {
            return arr[i];
        }
    }
    return arr[0];
}

// 思路3：利用上面的特性，实际上并不需要按顺序查找，前半部分子数组的值基本上是大于等于后半部分子数组的值，因此可以使用二分
// 比如[3,4,5,1,2] ，初始化时l = 0, r = 4
// 第一次 m = 2 arr[m] > arr[l] 说明m一定在左子数组，此时需要将l移动到m处
// 第二次 l = 2, r = 4, m = 3, arr[m] < arr[r]，说明此时m一定在右侧子数组
// 依次比较，直到l与r的索引值相差为1的时候，表示两个数组的连接处，此时arr[r]即为结果

function solution(arr) {
    var len = arr.length;
    var l = 0;
    var r = len - 1;

    var m = 0

    // 处理数组均为增序的情况，则可以跳过循环直接返回首元素
    while (arr[l] >= arr[r]) {
        if(r - l === 1) {
            m = r
            break
        }
        m = ((r - l) >> 1) + l;
        if(arr[m] >= arr[l]){
            l = m
        }else if(arr[m] <= arr[r]){
            r = m
        }
    }
    return arr[m]
}

// 思路3： 特殊情况如[1,0,1,1,1]，无法判断m属于左边还是右边，此时只能通过顺序查找最小值



var arr = [3,4,5,1,2]
var res = solution(arr)
console.log(res)