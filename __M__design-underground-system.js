// https://leetcode.com/problems/design-underground-system/

const c = console.log.bind(console);


// solved by me but with 2419ms runtime
var UndergroundSystem = function() {
    this.info = {};
    this.timeMap = {};
    this.stationIndex = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (this.stationIndex[stationName]) {} else {
        let arr = Object.values(this.stationIndex);
        let max = Math.max(...arr);
        this.stationIndex[stationName] = max ? max + 1 : 1;
    }
    this.info[id] = {
        startStName: stationName,
        endStName: "",
        inTIme: t,
        outTime: "",
    };
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

    const timeTaken = Math.abs(this.info[id].inTIme - t);
    let arr = timeTaken;
    let obj = this.info[id];
    let inOutStName = `${obj.startStName}-${obj.endStName}`;

    let prevData = this.timeMap[inOutStName];

    if (Object.keys(this.timeMap).includes(`${inOutStName}`)) {
        this.timeMap[inOutStName] += "," + arr.toString();
    } else {
        this.timeMap[inOutStName] = arr.toString();
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
    startStation,
    endStation
) {
    let staName = `${startStation}-${endStation}`;

    let splited = this.timeMap[staName].split(",");
    // console.log(splited)
    return splited.reduce((a, b) => parseInt(a) + parseInt(b)) / splited.length;
};

var obj = new UndergroundSystem();
obj.checkIn(10, "Leyton", 3);
obj.checkOut(10, "Paradise", 5);
var param_3 = obj.getAverageTime("Leyton", "Paradise");

// var obj = new UndergroundSystem();

obj.checkIn(5, "Leyton", 10);

obj.checkOut(5, "Paradise", 16);
var param_3 = obj.getAverageTime("Leyton", "Paradise");

c(param_3);