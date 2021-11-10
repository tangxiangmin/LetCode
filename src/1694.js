/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    number = number.replace(/\s|-/gi, "");

    var len = number.length;
    var token = "";
    var mod = len % 3;
    var end;
    if (mod === 0) {
        end = len;
    } else if (mod === 1) {
        end = len - 4;
    } else if (mod === 2) {
        end = len - 2;
    }

    var list = [];
    for (var i = 0; i < end; ++i) {
        var ch = number[i];
        token += ch;
        if (token.length === 3) {
            list.push(token);
            token = "";
        }
    }

    if (end === len - 4) {
        list.push(number.substr(end, 2));
        list.push(number.substr(end + 2));
    } else if(end !== len) {
        list.push(number.substr(end));
    }
    return list.join("-");
};

var number = "1-23-45 6";
number = "123 4-5678";
// number = "123 4-567"
number = "1-23-45 6"
var ans = reformatNumber(number);
console.log(ans);
