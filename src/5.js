/**
 * @param {string} s
 * @return {string}
 * 思路：动态规划 P(i,j)=(P(i+1,j−1) and Si == Sj)
 * js部分用例会超时
 */

var longestPalindrome = function (s) {
    var memo = {}
    var len = s.length
    // 找到所有长度为1和2的回文字符串
    for (var i = 0; i < len; ++i) {
        memo[s[i]] = true
        if (s[i + 1] && s[i] === s[i + 1]) {
            var sub = s[i] + s[i + 1]
            memo[sub] = true
        }
    }

    // 找到所有长度大于2的回文字符串
    for (var c = 3; c <= len; ++c) {
        for (var i = 0; c - 1 + i < len; ++i) {
            var mid = s.substr(i + 1, c - 2) // 如果mid为回文，则sub只需要满足首尾字符相同，则也为回文字符串
            var start = s[i]
            var last = s[c + i - 1]
            if (start === last && memo[mid]) {
                var sub = start + mid + last
                memo[sub] = true
            }
        }
    }
    var ans = ''
    Object.keys(memo).forEach(item => {
        if (ans.length < item.length) {
            ans = item
        }
    })

    return ans
};

// 中心扩展算反
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s
    }

    var start = 0, end = 0
    for (var i = 0; i < s.length; ++i) {
        var len1 = expandAroundCenter(s, i, i)
        var len2 = expandAroundCenter(s, i, i + 1)
        var len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    
    return s.substr(start, end + 1);

    // 回文字符串从中心开始扩散
    function expandAroundCenter(s, left, right) {
        let l = left,
            r = right
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        return r - l - 1;
    }
}

var s = 'babad'
// s = "abcba"
// s = "ccc"
// s = "aba"
// s = "jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"


// s = "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"

var res = longestPalindrome(s)
console.log(res)

