/**
 * @param {string} s
 * @return {string}
 */

// 思路: BF
var longestPalindrome = function (s) {
    var len = s.length;
    var max = 0;
    var ans = "";
    for (var i = 0; i < len; ++i) {
        for (var j = i + 1; j <= len; ++j) {
            var tmp = s.slice(i, j);
            if (isPalindrome(tmp) && tmp.length > max) {
                ans = tmp;
                max = tmp.length;
            }
        }
    }
    return ans;

    function isPalindrome(str) {
        var len = str.length;
        for (var i = 0; i < len / 2; ++i) {
            if (str[i] !== str[len - i - 1]) {
                return false;
            }
        }
        return true;
    }
};
// 思路： BF算法计算了大量的重复子字符串，可以优化
// P(i, j)定义当S[i,j]为回文串时为true
// 则：P(i,j)=(P(i+1,j−1) and Si == Sj)
var longestPalindrome = function (s) {
    const n = s.length
    const dp = new Array(n).fill(0).map(() => new Array())

    let res = "";
    // 由于在计算dp[i][j]的时候需要用到dp[i+1][j-1]，因此从后向前遍历i，这样就可以提前知道dp[i+1]的状态
    for (var i = n - 1; i >= 0; i--) {
        for (var j = i; j < n; j++) {
            // j-i<2表示为0或1个字符串，
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};



var s = "babad";
// s = "a";
// s = "abcba"
// s = "ccc"
// s = "aba"
// s = "jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"

// s = "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"

var res = longestPalindrome(s);
console.log(res);
