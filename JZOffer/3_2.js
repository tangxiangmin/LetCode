// 不修改数组找到重复的数字
// 在一个长度为n+1的数组里所有数字都在1~n的范围内，所有数组中至少有一个数字是重复的。请找出数组中任意一个重复的数字，但不能修改输入的数组。

// 与3_1类似，但是题目要求不能修改数组， 一种办法是使用hash表，接下来研究不使用额外空间的解法
// 如果没有重复数字，则在1~n中只有n个数字，目前数组超过了n个数字，则肯定有重复的。基于这个思路，将数组分成两部分 1~m 与 m+1 ~ n，如果前部分数组中在1~m区间的个数超过m，则表示该部分包含重复数字；后部分的逻辑同理，这样就是一个二分查找的过程，只是在每次查找过程中需要遍历数组统计数量
// 例如：[2,3,5,4,3,2,6,7]  长度为8， 分为1 ~ 4 和 5 ~ 7之间，
// 在第一次二分判断中，数组中在1~4范围的个数有5个，则表示包含重复数字，继续二分 1~2 和 3~4
// 在第二次二分判断中，在1~2范围内的个数有2个，无法确定是否包含重复的数字；在3~4范围内有3个数组，表示肯定包含重复的数组
// 最后，统计3的个数，数量大于1，直接返回

// 最终空间复杂度为O(1)，时间复杂度比hash解法更高，为O(nlogn)，相当于时间换空间，这道题还要求在写代码之间理解出题人的具体意图，然后再考虑使用对应算法

function solution(arr){
    var len = arr.length
   
    var start =1 
    var end = len - 1
    while(start <= end){
        var m = ((end - start) >> 1) + start
        var c = count(start, m)
        if(end === start){
            if(c > 1){
                return start
            }else {
                break
            }
        }

        if(c > (m - start + 1)){
            end = m
        }else {
            start = m + 1
        }
    }
    return -1

    function count(start, end){
        var count = 0
        for(var val of arr){
            if(val >= start && val <= end){
                count++
            }
        }
        return count
    }
}

var arr = [2,3,5,4,3,2,6,7]
var res = solution(arr)
console.log(res)