/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    var start = 'a'.charCodeAt(0)
    var map = {}
    for(var i = 0; i < 26; ++i){
        var ch = String.fromCharCode(start + i)
        map[i] = ch
    }

    var dp = []
    var arr = num.toString()
    var len = arr.length

    dp[0] = ['']
    dp[1] = [map[arr[0]]]

    for(let i = 1; i < len; ++i){
        dp[i+1] = []
        let ch = arr[i]
        for(let prefix of dp[i]){
            dp[i+1].push(prefix + map[ch])
        }
        if(arr[i-1] !== '0'){
            let pre = arr[i-1]  + arr[i]
            if(parseInt(pre, 10) < 26 ){
                for(let prefix of dp[i-1]){
                    dp[i+1].push(prefix + map[pre])
                }
            }
        }
    }
    return dp[len].length
};

var num = 12258
num = 506
num  = 220
// dp[i] = [for dp[i-1] + map[i]] ... [if val(i-1, i) < 26 then for dp[i-2] + map(val(i-1, i))]

var res = translateNum(num)
console.log(res)