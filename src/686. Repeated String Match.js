// 给定A、B两个字符串，求需要将A重复的最少次数，B才会成为其子串，如果不存在返回-1
// 思路: include判断
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

// var repeatedStringMatch = function (A, B) {
//     var count = 1;
//     var origin = A;
//     while(!A.includes(B)){
//         A = origin.repeat(++count);

//         // 这里纯粹是钻了测试用例的漏洞
//         if (A.length > B.length*10){
//             return -1;
//         }
//     }

//     return count;
// };

var repeatedStringMatch = function (A, B) {
    var count = 1;
    var str = A;
    for(; str.length < B.length; count++){
        str += A;
    }
    
    if (str.includes(B)){
        return count;
    }else {
        str += A;
        count++;
        if (str.includes(B)){
            return  count;
        }
    }

    return -1;
};


var res = repeatedStringMatch("bb", "bbbbbbb");
console.log(res);