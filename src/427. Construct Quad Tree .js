// 实现四叉树

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    let row = grid.length;
    let col = grid[0].length;

    // 所有节点的值相同时则为叶子节点
    function isLeaf(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let target = grid[0][0];
        for (let i = 0; i < row; ++i) {
            for (let j = 0; j < col; ++j) {
                if (grid[i][j] !== target) {
                    return false;
                }
            }
        }

        return true;
    }

    if (isLeaf(grid)) {
        return new Node(!!grid[0][0], true, null, null, null, null);
    } else {
        let topLeft = [],
            topRight = [],
            bottomLeft = [],
            bottomRight = [];

        for (let i = 0; i < row / 2; ++i) {
            topLeft.push(grid[i].slice(0, col / 2));
            topRight.push(grid[i].slice(col / 2));
        }

        for (let i = row / 2; i < row; ++i) {
            bottomLeft.push(grid[i].slice(0, col / 2));
            bottomRight.push(grid[i].slice(col / 2));
        }

        return new Node(true, false, construct(topLeft), construct(topRight), construct(bottomLeft), construct(bottomRight));
    }
};

let input = [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0]
];

let input2 = [
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [1, 1, 1, 1], 
    [1, 1, 1, 1]];
construct(input2);
