/**
 * @param {string} path
 * @return {string}
 */
// 思路
// 1.连续// 合并
// 2.符号./，可省略
// 3.符号../，同时移除当前目录和该符号
var simplifyPath = function (path) {
    var paths = path.split(/\//)
    var arr = []
    for (var i = 0; i < paths.length; ++i) {
        var cur = paths[i]
        if (cur === '' || cur === '.') continue;
        if (cur === '..') {
            arr.pop()
        } else {
            arr.push(cur)
        }
    }
    return '/' + arr.join('/')
};

var path = "/a/./b/../../c/" // /c
path = "/a/../../b/../c//.//" // "/c"
// path = "/a//b////c/d//././/.." // "/a/b/c"
var res = simplifyPath(path)
console.log(res)