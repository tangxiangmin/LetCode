/**
 * https://leetcode.com/problems/island-perimeter/#/description
 */
var islandPerimeter = function(arr) {
    var h = arr.length,
        w = arr[0].length;
    // 四种情况
    // 1.与一个方块相连，边长3
    // 2.与两个方块相连，边长2
    // 3.与三个方块相连，边长1
    // 4.与四个方块相连，边长0
    //
    function getNum(i, j){
        var count = 4;

        var left = j-1>=0? arr[i][j-1]: false,
            right = arr[i][j+1],
            top = i-1>=0 ? arr[i-1][j] : false,
            bottom = arr[i+1] && arr[i+1][j];

        if (right && right == 1){
            count--;
        }
        if (left && left == 1){
            count--;
        }
        if (bottom && bottom == 1){
            count--;
        }
        if (top && top == 1){
            count--;
        }
        return count;
    }

    var total = 0;
    for (var i = 0; i < h; ++i){
        for(var j = 0; j < w; ++j){
            if (arr[i][j] == 0){
                continue;
            }

            total += getNum(i, j);

        }
    }

    return total;
};