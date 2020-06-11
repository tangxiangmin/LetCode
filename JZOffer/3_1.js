// 题目1 找出数组中的重复数字
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
// 例如：如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。


// 思路1：使用hash表，记录已经遍历过的元素，内存O(n)，时间O(n)
function solution(arr){
    var map = {}
    for(var val of arr){
        if(!map[val]){
            map[val] = true
        }else{
            return val
        }
    }
    return -1
}

// 思路2：题目给出了一个限制：所有数字都在0 ~ n-1的范围内, 
// 如果没有重复的数字，则排序后数字i将出现在arr[i]处；由于存在重复的数字，则某些索引值arr[i]处没有值，而某些arr[i]包含多个值
// 通过这个特性，可以将空间复杂度降低为O(1)
// 具体算法步骤为：从头遍历数组，对于每个索引i处的元素m，判断i === m,
//  如果是，则遍历下一个元素
//  如果不是，则判断 arr[m] === m ： 如果不相等，则把arr[i]处的值m与arr[m]处的值交换，把m放在arr[m]处；如果相等，则表示i与m处均出现了m值，说明m是一个重复出现的值
// 对于[2,3,1,0,2,5,3]
// 变化过程为 [1,3,2,0,2,5,3] -> [3,1,2,0,2,5,3] -> [0,1,2,3,2,5,3] -> [0,1,2,3,2,5,3] 发现arr[4] = 2 与arr[2]相同，则找到了重复出现的值

function solution(arr){
    // 数据校验
    if(!arr || !arr.length) return -1
    for(let v of arr){
        if(v < 0 || v > arr.length - 1){
            return -1
        }
    }

    for(let i = 0; i < arr.length; ++i){
        while(arr[i] !== i){
            var m = arr[i]
            if(arr[m] !== m){
                var tmp = arr[m]
                arr[i] = tmp
                arr[m] = m
            }else {
                return m
            }
        }
    }
}

var arr = [2,3,1,0,2,5,3]
var res = solution(arr)
console.log(res)

