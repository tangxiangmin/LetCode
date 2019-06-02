/**
 * @param {number[][]} costs
 * @return {number}
证明一下为什么要使cost[i][0] - cost[i][1]越小越好：
假设A团体去A市，B团体去B市，此时费用为a。
假设上述A团体去B市，B团体去A市，此时费用为b。
求a的最小值，相当于求b的最大值，又相当于要使b-a的值是所有组合中最大的。
b-a的值等于A团体所有人的cost[1]-cost[0]的和，加上B团体所有人的cost[0]-cost[1]的和。
b-a的值又等于A团体所有人的cost[1]-cost[0]的和，减去B团体所有人 d的cost[1]-cost[0]的和。
那么只要A团体所有人的cost[1]-cost[0]的和最大，B团体所有人的cost[1]-cost[0]的和最小，就可以使得b-a最大。
只要对所有人的cost[1]-cost[0]排个序，前n个人去A市，后n d个人去B市，即可使得b-a最大，亦即a最小。
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b)=>{
        return (a[0] - a[1]) - (b[0] - b[1])
    })
    console.log(costs);
    var cost = 0
    for(var i = 0; i < costs.length/2; ++i) {
        cost += costs[i][0]
    }
    for(var i = costs.length / 2; i < costs.length; ++i){
         cost += costs[i][1];
    }
    return cost
};

var arr = [
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
];

var res = twoCitySchedCost(arr)
console.log(res)