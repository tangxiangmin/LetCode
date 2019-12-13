/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 思路：将乘法转换为加法，两个字符串之间上面
// 思路：123*89 = (9*3*1 + 9*2*10 + 9*1*100)*1 + (8*3*1 + 8*2*10 + 8*1*100)*10

var multiply = function (num1, num2) {
    if (num1 == '0' || num2 == '0') return '0';
    num1 = num1 + '';
    num2 = num2 + '';
    let l1 = num1.length, l2 = num2.length,
        store = new Array(l1 + l2 - 1).fill(0), t = 0, r = '';
    for (let i = 0; i < l2; i++) {
        for (let j = 0; j < l1; j++) {
            store[i + j] += (+num2[i] * +num1[j])
        }
    }
    let k = store.length;
    // 处理进位
    while (k--) {
        t += store[k];
        r = t % 10 + r;
        t = t / 10 | 0;
    }
    return t > 0 ? (t + r) : r;
}