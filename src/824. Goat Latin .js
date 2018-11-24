// 使用指定规则对字符串word进行转换


/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    function isVowel(ch){
        return ['a', 'e', 'i', 'o', 'u'].indexOf(ch.toLowerCase()) > -1
    }

    function format(word, index){
        if(isVowel(word[0])){
            word += 'ma'
        }else {
            word += word[0] + 'ma'
            word = word.substr(1)
        }
        let suffix = ''
        for(let i = 0; i <= index; ++i){
            suffix += 'a'
        }
        
        return word + suffix;
    }
    return S.split(' ').map((item, index)=>{
        return format(item, index)
    }).join(' ')
};