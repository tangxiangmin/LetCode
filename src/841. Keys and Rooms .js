/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let hash = {}
    let cache = {} // 保存已访问过的房间
    function getRoomKeys(index) {
        cache[index] = true
        let keys = rooms[index];
        for (let j = 0; j < keys.length; ++j) {
            let key = keys[j];
            hash[key] = true;
        }
    }

    getRoomKeys(0)
    while(true){
        let originVistedRoom = Object.keys(cache).length
        for (let key in hash) {
            let room = key
            if (cache[room]) {
                continue
            } else {
                getRoomKeys(room);
            }
        }

        // 已访问所有的房间
        if (originVistedRoom === Object.keys(cache).length){
            break
        }
    }

    for(let i = 1; i < rooms.length; ++i){
        if(!hash[i]){
            return false
        }
    }
    return true
};
canVisitAllRooms([[1], [2], [3], []])