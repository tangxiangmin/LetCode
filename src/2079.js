/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
// 从左向右浇水，因此直接模拟
var wateringPlants = function (plants, capacity) {

    let c = capacity
    let i = 0
    let ans = 0
    while (true) {
        while (c >= plants[i] && i < plants.length) {
            c -= plants[i]
            ans++
            i++
        }
        if (i === plants.length) {
            break
        }
        // 返回-1处补充c
        ans += i * 2
        c = capacity
    }
    return ans

};

var plants = [2, 2, 3, 3], capacity = 5
plants = [1,1,1,4,2,3], capacity = 4
var ans = wateringPlants(plants, capacity)
console.log(ans)