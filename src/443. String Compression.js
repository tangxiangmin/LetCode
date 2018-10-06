// 对字符串进行压缩，返回压缩后表示的字符串长度
// ["a","a","b","b","c","c","c"] 压缩为 ["a","2","b","2","c","3"]
// 每个数字占一个字符

var compress = function (chars) {
    let letter = chars[0],
        num = 1
    let res = '';

    let str = chars.join('')
    for (let i = 1; i < str.length; ++i){
        let char = str[i];
        if (letter === char){
            num++
        }else {
            res += letter + (num > 1 ? num : "");

            num = 1;
            letter = char;
        }
    }

    res += letter + (num > 1 ? num : "");
    for(let i = 0;i < res.length; ++i){
        chars[i] = res[i]
    }

    chars.splice(res.length);
    return chars.length;
};

var arr = ["a", "a", "b", "b", "c", "c", "c"]

var res = compress(arr)
console.log(res)