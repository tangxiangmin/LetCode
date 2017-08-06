/**
 * Created by admin on 2017/6/15.
 */
// 猜数字，给定1到n，每次猜测结果
// -1 猜测的数字小了
// 1 猜测的数字大了
// 0 猜中了

// PS: 这道题居然只有C++,Java和Python的选项
// 思路：二分

var guessNum = function(n, target){
    // 这个应该是题目说明内置的函数
    function guess(num){
        if (num > target){
            return 1;
        }else if (num < target){
            return -1;
        }else {
            return 0;
        }
    }

    var low = 1,
        high = n;

    var count = 0,
        mid, res;
    while(low < high){
        count++;
        mid = Math.round(low+(high-low)/2);
        res = guess(mid);

        if (res === -1){
            high = mid - 1;
        }else if(res === 1){
            low = mid + 1;
        }else {
            console.log("猜测次数:"+count);
            return mid;
        }
    }

    return low;
};
var test = 2;
console.log(guessNum(test, 2));
