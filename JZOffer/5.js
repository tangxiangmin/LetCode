

// 实现一个函数，把字符串中每个空格替换成'%20'

// 突然想起之前遇见的一个面试题：为什么要对url进行 URLEncode编码？

// 思路：实现起来比较简单，但是要考虑字符串的特殊性，诸如包装对象等
function solution(str){
    return str.split(' ').join('%20')
}

function solution(str){
    var ans = ''
    for(var i = 0; i < str.length; ++i){
        var ch = str[i]
        ans +=  ch === ' ' ? '%20' : ch
    }
    return ans
}
// 在某些场景下会要求我们在字符串本身进行替换，然而JS的字符串是基础类型，所以这里实现一种在数组上原样替换的
function solution(str){
    var arr = str.split('') // 根据题意，将数组中将所有的 ' ' 替换成'%' '2' '0'三个位置
    var count = 0
    for(var ch of arr){
        if(ch === ' '){
            count++
        }
    }
    var cur = arr.length -1
    var len = arr.length + count * 2 // 替换所有空格后数组的长度
    // 从后向前依次添加
    for(let i = len -1; i >=0;--i){
        let ch = arr[cur]
        if(ch === ' '){
            arr[i] = '0'
            arr[i-1] = '2'
            arr[i-2] = '%'
            i -= 2
        }else {
            arr[i] = ch
        }
        cur--
    }
    console.log(arr) // 增加数组的位置
    return arr.join('')
}

var str = 'We are happy'
var res = solution(str)
console.log(res)