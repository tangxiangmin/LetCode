// 给定一个数组代表花圃，0代表空，1代表花，花不能相邻
// 给定n多花，判断是否可以完全种下
// 思路，遍历数组寻找合适的位置，判断最后是否有剩余的花


var canPlaceFlowers = function (flowerbed, n) {
    function canPlant(i){
        if (flowerbed[i]==1 || flowerbed[i-1] == 1 || flowerbed[i+1] == 1){
            return false;
        }
        return true;
    }

    for(var i = 0; i < flowerbed.length; ++i){
        if (canPlant(i)){
            n--;
            flowerbed[i]=1;
        }
        if (n <= 0){
            return true;
        }
    }
    
    return false

};

var arr = [1, 0, 0, 0, 1, 0, 0],
    num = 2;

console.log(canPlaceFlowers(arr, num));
