const c = console.log.bind(console);

var equalFrequency = function(word) {
    let map = new Map();

    word.split('').forEach(item => {
            map.set(item, (map.get(item) + 1 || 1))
        })
        // let newMap = new Map();
    let arr = [];
    for (let [key, value] of map.entries()) {
        // c(key)
        // newMap.set(value, newMap.get(value) + 1 || 1);
        arr.push(value);

    }
    let result = false
    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = sortedArr.length - 1; i >= 0; i--) {
        let temp = [...sortedArr];
        temp[i] = temp[i] - 1;
        // c(temp)
        // c(i)
        if ([...new Set(temp)].length == 1) {
            return true;

        } else {
            let check = [...new Set(temp)];

            check.sort((a, b) => a - b);
            // c(check)
            if (check[0] == 0 && check.length <= 2) {
                return true
            } else {

            }
        }
    }

    return result;
    // return newMap;
    // if (newMap.size > 2) {
    //     return false;

    // } else if (newMap.size == 2) {
    //     let arr = [];
    //     for (let [key, value] of newMap.entries()) {
    //         arr.push(value);
    //     }
    //     return Math.abs(arr[0] - arr[1]) == 1 ? true : false;
    // } else if (newMap.size == 1) {
    //     let [key] = newMap.keys();
    //     return key == 1 ? true : false;
    //     // return map.get(0)
    // }
};


c(equalFrequency("aabbccc")) //true

c(equalFrequency('aazz')) //false

c(equalFrequency('bac')) //true

c(equalFrequency("ddaccb")) //false

c(equalFrequency("aca")); //true

c(equalFrequency("abbcc")) //true