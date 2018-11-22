

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {

    let line = 1;
    let perLineCount = 0;

    let start = 'a'.charCodeAt(0)
    function getCharWidth(letter) {
        let index = letter.charCodeAt(0) - start
        return widths[index]
    }
    for(let i = 0; i < S.length; ++i){
        let width = getCharWidth(S[i])
        if (perLineCount + width >100){
            line++
            perLineCount = width
        }else {
            perLineCount += width
        }
    }
    return [line, perLineCount];
};