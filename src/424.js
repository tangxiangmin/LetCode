/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 思路：以AABABBA, k = 1为例，记录为(A,2)(B,1)(A,1)(B,2)(A,1)
// 可以看见字符串中连续重复长度n的子串为(A,2)和(B,2)，n = 2，此时找到操作k的位置，使得最终的连续子字符串长度
// 最终长度为n + （for 1...k 相邻相同的子串）
var characterReplacement = function (s, k) {
    var arr = []
    var ptr = 0
    var maxIndex = 0
    for (var i = 0; i < s.length;) {
        var ch = s[i]
        while (ch === s[++ptr]) { }
        var len = ptr - i
        arr.push({ ch, len: len })
        if (len > arr[maxIndex].len) {
            maxIndex = arr.length - 1
        }

        i = ptr
    }

    var ans = arr[maxIndex].len
    while (k > 0) {
        var prev = maxIndex - 1
        var next = maxIndex + 1

    }
    console.log(arr, maxIndex)
};

var characterReplacement = function (s, k) {
    var i = 0
    var j = 0
    var len = s.length
    var max = 0
    while (i < len) {
        console.log(i)
        var count = 1
        var n = k
        var ch = s[i]
        while (ch === s[++j] && j < len) {
            count++
        }
        var start = i
        // 记录下一个不相同的位置，下次从此处进行遍历
        i = j

        // 此时ch !== s[j]，继续向前
        while (n > 0 && j < len) {
            if (ch !== s[j]) {
                // 将s[j]修改为ch，操作次数-1，count+1
                n--
            }
            j++
            count++
        }

        var j 
 
        max = Math.max(max,count)
    }
    return max
}
var s = 'AABABBA', k = 1
s = "ABAB", k = 2
s = "ABBB", k = 2
var res = characterReplacement(s, k)
console.log(res)