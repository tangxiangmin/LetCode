/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var visited = []
    function dfs(roomNumber){
        if(visited[roomNumber]){
            return
        }
        visited[roomNumber] = true // 记录已经访问过的房间

        var keys = rooms[roomNumber]
        for(var i = 0; i < keys.length; ++i){
            dfs(keys[i]);
        }
    }
    dfs(0)
    for(var i = 0; i < rooms.length; ++i){
        if(!visited[i]){
            return false
        }
    }
    return true
};

var rooms = [[1], [2], [3], []];
rooms = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms));