// 实现sqrt(x)

// 参考大佬的牛顿迭代法 https://www.zhihu.com/question/20690553
var mySqrt = function (x) {
    if (x == 0) {
        return 0;
    }
    var last = 0,
        res = 1;
    while (res != last) {
        last = res;
        res = (res + x / res) / 2;
    }
    return Math.floor(res);
}

// 常规二分
var mySqrt = function (x) {
    let l = BigInt(1);
    let r = BigInt(x);
    while (l <= r) {
        const mid = (l + r) >> BigInt(1);
        const v = mid * mid;
        if (v > BigInt(x)) {
            r = mid - BigInt(1);
        } else if (v === BigInt(x)) {
            return mid;
        } else {
            l = mid + BigInt(1);
        }
    }
    return Number(r);
};


var x = 8
var res = mySqrt(x);
console.log(res)