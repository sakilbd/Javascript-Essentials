// https://leetcode.com/problems/student-attendance-record-i/description/
const c = console.log.bind(console);


//by me you know why !!! :/ 
var checkRecord = function(s) {
    let map = new Map();
    let splited = s.split("");

    let length = splited.length;
    let i = 0;

    while (i < length) {
        // c(i)
        if (splited[i] == "L" && map.get("L") > 0) {
            if (i != 0 && splited[i - 1] == "L") {
                map.has(splited[i]) ?
                    map.set(splited[i], map.get(splited[i]) + 1) :
                    map.set(splited[i], 1);
            } else {
                map.set("L", 1);
            }
        } else {
            map.has(splited[i]) ?
                map.set(splited[i], map.get(splited[i]) + 1) :
                map.set(splited[i], 1);
        }
        if (map.get("A") > 2) {
            return false;
        }

        if (map.get("L") >= 3) {
            return false;
        }
        i++;
    }
    // return map;
    return true;
};



//by community 
var checkRecord = function(s) {
    let aCount = 0;
    let lCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "A") aCount++;
        if (aCount == 2) return false;
        if (s[i] == "L") lCount++;
        else lCount = 0;

        if (lCount == 3) return false;
    }
    return true;
};
// c(checkRecord("PPAALL"))

c(checkRecord("PLPPPLLLPLPPPPLPPPPPLPLPLLLPLP"));