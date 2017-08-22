/**
 * Created by admin on 2017/8/6.
 */
// 判断两个字符串是否是同形的，比如foo->add, paper->title
// 思路：看到题首先想到了ejs源码里面的界定符替换，把他们都转换成某个值，然后比较是否相等
// 比如foo与add都可以转换成122

var isIsomorphic = function(s, t) {

    function getTmp(str) {
        var hash = {}, res = "", count = 0;
        for (var i = 0, len = str.length; i < len; ++i){
            let key = str[i];
            if (!hash[key]){
                hash[key] = ++count;
            }
            res += hash[key];
        }
        console.log(hash);
        return res;
    }

    return getTmp(s) === getTmp(t);
};
// var t1 = "foo",
//     t2 = "add";

var t1 = "ab",
    t2 = "aa";

console.log(isIsomorphic(t1, t2));
