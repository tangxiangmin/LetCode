/**
 * Created by admin on 2017/9/26.
 */
// 计算排球比赛得分，对应字符代表某个操作或得分
var calPoints = function (ops) {

    function cal(operate, arr) {
        let len = arr.length;
        switch (operate) {
            case 'C':
                arr.pop(); // 上一轮无效
                break;
            case 'D':
                var score = arr[len - 1] || 0;
                arr.push(score * 2); // 获取上一次的双倍得分
                break;
            case '+':
                var score = parseInt(arr[len - 1]) + parseInt(arr[len - 2]);
                arr.push(score);
                break;
            default:
                arr.push(operate); // 其他为分数
        }

        return arr;
    }

    let res = [];
    for (var i = 0; i < ops.length; ++i) {
        res = cal(ops[i], res);
    }

    let sum =  res.reduce(function (sum, item) {
        return sum + (item-0);
    }, 0)

    return sum
};

var test = ["5", "2", "C", "D", "+"];
calPoints(test);