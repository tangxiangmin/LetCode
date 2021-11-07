
//这道题参考了题解，使用枚举
var containsPattern = function(arr, m, k) {
    const n = arr.length;
    for (let l = 0; l <= n - m * k; ++l) {
        let offset;
        for (offset = 0; offset < m * k; ++offset) {
            if (arr[l + offset] !== arr[l + offset % m]) {
                break;
            }
        }
        if (offset === m * k) {
            return true;
        }
    }
    return false;
};
