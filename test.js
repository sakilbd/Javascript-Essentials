const c = console.log.bind(console);



var getSmallestString = function(n, k) {

    let map = {};
    let arr = [];
    for (let i = 1; i < 27; i++) {
        map[i] = String.fromCharCode(96 + i);

    }
    let p = k;
    let possibleNumberOfA = n - Math.floor(k / 26);
    let possibleNumOfZ = n - possibleNumberOfA;



    let zValue = possibleNumOfZ * 26;

    if ((k - zValue) >= possibleNumberOfA) {


        arr.push(Array(possibleNumOfZ).fill("z").join(''));
        let valueLeft = k - possibleNumOfZ * 26;

        if (possibleNumberOfA >= 1) {
            arr.push(map[valueLeft - (possibleNumberOfA - 1)]);
            arr.push(Array(possibleNumberOfA - 1).fill("a").join(''))
        }


    } else {

        // return "shit"



        // c("posZ :" + possibleNumOfZ);

        let SlotLeft = n - possibleNumberOfA;
        let ValueLeft = k - possibleNumberOfA;

        let newZcount = (ValueLeft / 26);

        // return newZcount;



        let finalKCount = possibleNumberOfA + newZcount * 26;
        // return newZcount
        //need to work with this

        let finalNeededValue = k - finalKCount
        let finalSlotLeft = n - (possibleNumberOfA + newZcount);
        // return finalSlotLeft;
        let finalANeeded = possibleNumberOfA + (finalSlotLeft - 1)
            // return finalNeededValue;

        arr.push(Array(newZcount).fill('z').join('')); //z push 
        if (finalSlotLeft <= 1) {
            arr.push(map[finalNeededValue]);
        } else {
            // return map[finalNeededValue - (finalSlotLeft - 1)];
            // arr.push("b")
            arr.push(map[finalNeededValue - (finalSlotLeft - 1)]);
        }
        // other alphabate push if needed
        arr.push(Array(finalANeeded).fill('a').join(""))
        c("finalSlotLeft :" + finalSlotLeft);
        c("newZCount :" + newZcount)
        c("leftValue :" + ValueLeft);
        c("leftSlot :" + SlotLeft);
        c("posA :" + possibleNumberOfA);
        c("finalKCount " + finalKCount)

        c("finalNeeded :" + finalNeededValue)

        c("finalSlotLeft :" + finalSlotLeft)

        c("A-count :" + finalANeeded);
        c("Z-count :" + newZcount);
        c("other :" + (finalNeededValue - (finalSlotLeft - 1)))


        // return finalKCount

    }
    // return arr.reverse().join('')
    return arr.reverse().join('').length;
    return possibleNumberOfA;

    return map[26];
    return String.fromCharCode(96);
};

// c(getSmallestString(5, 73))
//     // c(getSmallestString(3, 27))
//     // c(getSmallestString(100, 1200))

// c(getSmallestString(3, 27))

// c(getSmallestString(101, 1268))

// c(getSmallestString(5, 130))

// c(getSmallestString(80, 576))

c(getSmallestString(23100, 567226))