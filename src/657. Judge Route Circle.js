/**
 * Created by admin on 2017/9/19.
 */
// 判断机器人是否回到了原点
// L R U D 代表对应的方向位移， moves 是移动步子的字符串
// 思路： 同方向的抵消，看最后结果是否为0
var judgeCircle = function(moves) {
    let map =  {};

    for (var v of moves){
        if(!map[v]){
            map[v] = 0;
        }
        map[v]++;
    }
    return map.D == map.U && map.L == map.R
};
var test = "UD";
judgeCircle(test);
