/**
 * https://leetcode.com/problems/keyboard-row/#/description
 */
var findWords = function(arr) {
    var row = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    var filter = Array.prototype.filter;
    var newArr = [];

    for (var i = 0, len = arr.length; i < len; ++i){
        var words = arr[i].toLowerCase();

        var j = 0,
            firstLetter = words[0];

        for (;j < 3; ++j){
            if (row[j].indexOf(firstLetter) !== -1){
                break;
            }
        }

        var rowj = row[j];
        var newWords = filter.call(words, (val)=>{
                return rowj.indexOf(val) !== -1;
    })

        if (newWords.join("") == words){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};