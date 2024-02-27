/**
 * Created by admin on 2017/4/7.
 */

// 有bug，Time Limit Exceeded
// var moveZeroes = function(nums) {
//     var flagNoZero = -1,
//         flagZero = -1;
//
//     for (var i = 0, len = nums.length; i < len; ++i){
//         // 找到第一个不为0的值
//         if (nums[i] !== 0 && flagNoZero === -1) {
//             flagNoZero = i;
//         }
//
//         // 找到第一个为0的值
//         if (nums[i] === 0 && flagZero === -1){
//             flagZero = i;
//         }
//
//         // 将第一个非0值与第一个0值交换
//         console.log(flagNoZero,flagZero);
//         if (flagNoZero !== -1 && flagZero !== -1){
//             if (flagZero < flagNoZero) {
//                 var tmp = nums[flagNoZero];
//                 nums[flagNoZero] = nums[flagZero];
//                 nums[flagZero] = tmp;
//
//                 i = flagZero;
//                 // 重置为0的坐标防止遗漏0
//                 flagZero = -1;
//             }
//             // 重置不为0的数以便下次交换
//             flagNoZero = -1;
//
//         }
//     }
//
//     return nums;
// };

// 思路：BF向后找到第一个非0元素，与前面的0进行交换，然后更新索引值
var moveZeroes = function (arr) {
    var index = 0
    for (var i = 0; i < arr.length; ++i) {
        var cur = arr[i]
        if (cur === 0) {
            index = i
            for (var j = i + 1; j < arr.length; ++j) {
                if (arr[j] !== 0) {
                    var tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp
                    break
                }
            }
        }
    }
    return arr
}
// 优化，
var moveZeroes = function (arr) {
    var i = 0,
        zeroIndex = 0,
        len = arr.length;
    for (; i < len; i++) {
        // 元素不等于0，则与第一个0进行交换
        if (arr[i] !== 0) {
            // 如果起始值不是0 ，则元素会与自身交换
            var tmp = arr[zeroIndex];
            arr[zeroIndex] = arr[i];
            arr[i] = tmp;
            zeroIndex++;
        }

    }
    return arr;
};



var test = [0, 1, 0, 3, 12];
// var test = [1, 0];
// var test = [1, 0, 1];

console.log(moveZeroes(test));