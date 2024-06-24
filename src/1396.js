
var UndergroundSystem = function () {

    this.user = {}
    this.map = {}

};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {

    this.user[id] = {
        startStation: stationName,
        startTime: t
    }

    if (!this.map[stationName]) {
        this.map[stationName] = []
    }
    this.map[stationName].push(this.user[id])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const record = this.user[id]
    record.endStation = stationName
    record.endTime = t

};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    const list = this.map[startStation]
    let sum = 0
    let cnt = 0
    for (const record of list) {
        if (record.endStation === endStation) {
            cnt++
            sum += record.endTime - record.startTime
        }
    }
    return sum / cnt
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */