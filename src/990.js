/**
 * @param {string[]} equations
 * @return {boolean}
 */

// 为每个变量赋值，未实现
var equationsPossible = function(equations) {
    let valMap = {} // 已用过的值

    let val = 1
    
    let equalList = []
    let unEqualList = []
    for(let equation of equations){
        let c1 = equation[0]
        let c2 = equation[3]
        if(equation[1] === '='){
            equalList.push([c1,c2].sort())
        }else {
            unEqualList.push([c1,c2].sort())
        }
    }
    equalList.sort((a,b)=>a[0].charCodeAt(0)-b[0].charCodeAt(0))

    console.log(equalList)
    for(const [a, b] of equalList){
        if(!valMap[a]){
            if(!valMap[b]){
                valMap[a] = val++
            }else {
                valMap[a] = valMap[b]
            }
        }

        if(!valMap[b]){
            valMap[b] = valMap[a]
        }else if(valMap[b] !== valMap[a]){
            console.log(a, b)
            console.log(valMap)
            return false
        }
    }
    unEqualList.sort((a,b)=>a[0].charCodeAt(0)-b[0].charCodeAt(0))
    for(const [a, b] of unEqualList){
        if(!valMap[a]){
            valMap[a] = val++
        }

        if(!valMap[b]){
            valMap[b] = val++
        }else if(valMap[b] === valMap[a]){
            console.log(valMap)
            return false
        }
    }
    return true
};
// 思路：并查集
var equationsPossible = function(equations) {
    let len = equations.length
    let parent = new Array(len)

    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    let code = 'a'.charCodeAt(0)
    for(let str of equations){
        if (str.charAt(1) == '=') {
            let index1 = str.charCodeAt(0) - code;
            let index2 = str.charCodeAt(3) - code;
            union(parent, index1, index2);
        }
    }

    for(let str of equations){
        if (str.charAt(1) == '!') {
            let index1 = str.charCodeAt(0) - code;
            let index2 = str.charCodeAt(3) - code;
            if (find(parent, index1) == find(parent, index2)) {
                return false;
            }
        }
    }
    return true

    // parent保存联通分量，
    function union(parent, i1, i2){
        parent[find(parent, i1)] = find(parent, i2);
    }

    function find(parent, index){
        while (parent[index] != index) {
            parent[index] = parent[parent[index]];
            index = parent[index];
        }
        return index;
    }
}

var arr = ["a==b","b!=a"]
arr = ["i!=c","i!=f","k==j","g==e","h!=e","h==d","j==e","k==a","i==h"]
arr = ["c==c","b==d","x!=z"]
var res= equationsPossible(arr)
console.log(res)