const c = console.log.bind(console);

var printVertically = function(s) {
    let splited = s.split(" ");
    let finalArr = [];
    let splitedCopy = [...splited];
    let length = splitedCopy.sort((a, b) => {
        return -a.length + b.length;
    })[0].length;
    // return length;
    let j = 0;
    let string = "";
    for (j; j < length; j++) {
        splited.forEach((item) => {
            for (let i = 0; i < 1; i++) {
                // item[j] ? c(item[j]) : c("E");
                item[j] ? (string += item[j]) : (string += " ");
            }

            if (j == length) {
                j = 0;
            }

            // c(string)
        });
        finalArr.push(string);
        string = "";
    }
    let stringJoinFlag = 0;
    return finalArr.map((item) => {
        let split = item.split("");

        split.reverse();
        // return split;
        let returnString = "";
        // let splitCopy = [...split];

        // c(split)
        split.forEach((item, i) => {

            // c(item[i])

            if (item != " ") {
                // c("fuck")
                // string +=
                // c("I :" + i);
                // c(splitCopy.splice(i - 1, 1));
                // c(splitCopy);
                // c("shit");
                stringJoinFlag = 1;
            }
            if (stringJoinFlag == 1) {
                if (item == ' ') {
                    returnString += ' ';
                } else {
                    returnString += item
                        // c(item)
                }
                // returnString += item[i];
            }

        });
        stringJoinFlag = 0;

        return returnString.split('').reverse().join('');
        // return item;
    });


};



//from community damn short 

// var printVertically = function(s) {
//     const arr = s.split(' ')
// const maxLength = Math.max(...arr.map(word => word.length))

// return [...Array(maxLength)].map((_, i) => arr.map(word => word[i] || ' ').join('').trimEnd())
// };

// c(printVertically("HOW ARE YOU"))

c(printVertically("TO BE OR NOT TO BE"));