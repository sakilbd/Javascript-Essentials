// https://leetcode.com/problems/design-underground-system/

const c = console.log.bind(console);
var UndergroundSystem = function() {
    trips = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    trips[id] = { stationName, t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const fromTo = `${trips[id].stationName}-${stationName}`;
    const diff = t - trips[id].t;
    if (trips[fromTo]) {
        trips[fromTo].sum += diff;
        trips[fromTo].length++;
    } else {
        trips[fromTo] = {
            sum: diff,
            length: 1,
        };
    }
    delete trips[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const fromTo = `${startStation}-${endStation}`;
    return trips[fromTo].sum / trips[fromTo].length;
};

var obj = new UndergroundSystem();
c(obj.checkIn(10, "Leyton", 3));
c(obj.checkOut(10, "Paradise", 5));
var param_3 = obj.getAverageTime("Leyton", "Paradise");