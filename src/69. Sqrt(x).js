// 实现sqrt(x)
// 思路：原本打算使用二分，发现会超时， 参考大佬的牛顿迭代法 https://www.zhihu.com/question/20690553


/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {

//     var min = 0,
//         max = x / 2 + 1;

//     while(min <= max){
//         var mid = (min + max) / 2;
//         var sq = mid*mid;
//         if (sq == x){
//             return mid;
//         }
//         else if (sq < x){
//             max = mid + 1;
//         }else {
//             min = mid - 1;
//         }

//     }

//     return mid
// };

var mySqrt = function (x) {
    if (x == 0) {
        return 0;
    }
    var last = 0,
        res =  1;
    while(res != last){
        last = res;
        res = (res + x /res )/2;
    }
    return Math.floor(res);

}

var res = mySqrt(8);
console.log(res)