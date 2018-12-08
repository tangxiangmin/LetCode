/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let row = A.length,
        col = A[0].length
        
    function toggle(n){
        return n === 0 ? 1 : 0
    }
    function isNeedChange(line){
        let num = 0
        for(let i= 0; i < line.length; ++i){
            if(line[i] === 1){
                num++
            }
        }
        return num < line.length/2
    }
    function changeRow(row){
        for(let i = 0; i < col; ++i){
            A[row][i] = toggle(A[row][i])
        }
    }
    function changeCol(col){
        for (let i = 0; i < row; ++i) {
            A[i][col] = toggle(A[i][col])
        }
    }
    function countSum(A){
        let sum = 0
        for (let i = 0; i < row; ++i) {
            let item = A[i].join('')
            sum += parseInt(item, 2)
        }
        return sum
    }

    // 第一轮先保证所有行第一位都是1
    for(let i = 0; i < row; ++i){
        if(A[i][0] === 0){
            changeRow(i)
        }
    }

    for(let j = 1; j < col; ++j){
        let line = []
        for(let i = 0; i < row; ++i){
            line.push(A[i][j])
        }

        if (isNeedChange(line)){
            changeCol(j)
        }
    }
    let sum = countSum(A);
    return sum;
};