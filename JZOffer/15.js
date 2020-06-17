// 二进制中1的个数
// 请实现一个函数，输入一个整数，输出该数二进制表示中1的个数。
// 例如，把9表示成二进制是1001，有2位是1。因此如果输入9，则该函数输出2。

// 思路1；将数字转换成二进制，然后计算
function solution(n) {
    var str = n.toString(2);
    var ans = 0;
    for (var i = 0; i < str.length; ++i) {
        var ch = str[i];
        if (ch === "1") {
            ans++;
        }
    }
    return ans;
}

// 思路2：位运算，在负数的时候会出现死循环，因为负数右移时首位会存放符号1
function solution(n) {
    var ans = 0;
    while (n) {
        // 判断最后1位是不是1
        if (n & 1) {
            ans++;
        }
        n = n >> 1;
    }
    return ans;
}
// 思路3：从低位开始判断每一位，而非移
function solution(n) {
    var ans = 0;
    var flag = 1;
    while (flag) {
        // 判断最后1位是不是1
        if (n & flag) {
            count++;
        }
        flag = flag << 1;
    }
    return ans;
}
// 思路4，有几个n就循环几次
function solution(n) {
    var ans = 0;
    while (n) {
        ++ans;
        n = (n - 1) & n;
    }
    return ans
}

console.log(solution(-9));
