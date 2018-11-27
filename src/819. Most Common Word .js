// 找到出现次数最多的非banned的单词

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let words = paragraph.replace(/[,.!]/, " ").replace(/\s+/, ' ').split(' ');
    let bannedHash = {}
    for(let i = 0; i< banned.length; ++i){
        bannedHash[banned[i]] = true
    }

    let hash = {}
    for(let i =0; i < words.length; ++i){
        let word = words[i].toLowerCase();
        if(bannedHash[word]){
            continue
        }

        if (!hash[word] ){
            hash[word] = 0
        }
        hash[word]++
    }
    
    let max = 0,
        res = '';
    for(let key in hash){
        if(hash[key] > max){
            max = hash[key]
            res = key
        }
    }
    return res
};

mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);