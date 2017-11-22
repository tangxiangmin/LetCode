
// 实现 strStr()，即在字符串中找到给定子字符串的起始位置，或者返回-1
// 思路：貌似KMP算法才是正道

var strStr = function (haystack, needle) {
    // js内置方法 
    // return haystack.indexOf(needle);

    // BF算法，会超时
    // for(var i = 0; i < haystack.length; ++i){
    //     for (var j = 0; ; ++j){
    //         // 字符不同，跳出循环
    //         if (haystack[i+j] !== needle[j]){
    //             break;
    //         }
    //         // 长度相同，返回i
    //         if (j == needle.length) {
    //             return i 
    //         }
    //         // 找到最后
    //         if (i+j == haystack.length){
    //             return -1;
    //         }
    //     }
    // }
};