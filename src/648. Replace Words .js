/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
    let words = sentence.split(" ");
    return words.map(word=>{
        let min = Infinity
        let target = ""
        for(let i = 0; i < dict.length; ++i){
            let root = dict[i]
            if (word.indexOf(root) === 0){
                if(min > root.length){
                    target = root
                    min = root.length
                }
            }
        }
        return target || word
    }).join(" ")
};

let res = replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery");
console.log(res)
