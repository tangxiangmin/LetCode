/**
 * @param {string} preorder
 * @return {boolean}
 */
// 思路1
// 入度：有多少个节点指向它
// 出度：它指向多少个节点
// 根据定律：树所有节点的出度和入度之和相等，空节点有1个入度和0个出度，非空节点有2个出度个1个入度，根节点有0个入度
var isValidSerialization = function (preorder) {
    var diff = 1

    for (var ch of preorder.split(',')) {
        diff -= 1
        if (diff < 0) return false
        if (ch !== '#')
            diff += 2
    }

    return diff === 0
};

// 思路2 使用栈模拟递归，左右子树正确，根节点正确，则树正确，
// 叶子节点表示均为x,#,#，可以将其删减，变成#，这样就可以递归判断父节点，
var isValidSerialization = function (preorder) {
    var stack = []
    for (var ch of preorder.split(',')) {
        stack.push(ch)
        var len = stack.length
        while (len >= 3 && stack[len - 1] === '#' && stack[len - 2] === '#' && stack[len - 3] !== '#') {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.push("#")
            len = stack.length
        }
    }
    return stack.length === 1 && stack[0] === '#'
};

var preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
// preorder = "#,#,3,5,#"
// preorder = "#"
preorder = "7,2,#,2,#,#,#,6,#"

var ans = isValidSerialization(preorder)
console.log(ans)