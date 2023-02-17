// https://leetcode.com/problems/design-underground-system/

const c = console.log.bind(console);

var UndergroundSystem = function() {

    this.info = {};
    this.timeMap = new Map();

};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.info[id] = {
        startStName: stationName,
        endStName: '',
        inTIme: t,
        outTime: ''
    }

    return this.info



};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    this.info[id].endStName = stationName;
    this.info[id].outTime = t;

    let obj = this.info[id];
    let inOutStName = obj.startStName + obj.endStName;

    this.timeMap.set(inOutStName, this.timeMap.get(inOutStName) ? this.timeMap.set(inOutStName, this.timeMap.get()));

    return this.timeMap;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
    startStation,
    endStation
) {};

var obj = new UndergroundSystem();
c(obj.checkIn(10, "Leyton", 3));
c(obj.checkOut(10, "Paradise", 5));
var param_3 = obj.getAverageTime("Leyton", "Paradise");