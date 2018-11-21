// 根据给定的DI字符规则，返回对应的数组

var diStringMatch = function (s) {
    let n = s.length
    let res = []
    let min = 0,
        max = n;
    for(let i = 0; i <= n; ++i){
        if(s[i] === 'I'){
            res[i] = min
            min++
        }else{
            res[i] = max
            max--
        }
    }
    return res
};

let res = diStringMatch("IDID");
console.log(res)