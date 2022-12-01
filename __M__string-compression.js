// https://leetcode.com/problems/string-compression/
const c = console.log.bind(console);



//runtime 150+ ms 
var compress = function(chars) {
    let curChar = chars[0];
    let count = 0;
    let temp = [...chars];
    temp.forEach((el, i) => {
        if (el === curChar) {
            chars.reverse().pop(); //needed as leetcode not accepting overriding chars array 
            chars.reverse(); //needed as leetcode not accepting overriding chars array 
            count++;

            // used this portion to push and calculate last based on last index 
            if (i == temp.length - 1) {
                chars.push(curChar);
                if (count >= 1 && count.toString().length == 1) {
                    count > 1 ? chars.push(count.toString()) : "";
                } else {
                    count.toString().split('').forEach(item => {
                        chars.push(item);
                    })
                }
            }
            // used this portion to push and calculate last based on last index 

        } else {
            chars.reverse().pop();
            chars.reverse();
            chars.push(curChar);
            if (count >= 1 && count.toString().length == 1) {
                count > 1 ? chars.push(count.toString()) : "";
            } else {
                count.toString().split('').forEach(item => {
                    chars.push(item); // for pushing multi digit value as individual element as required 
                })
            }
            curChar = el.toString();
            count = 1;
            //for pushing the last unique(single occurance) element 
            if (i == temp.length - 1) {

                chars.push(curChar);

                count > 1 ? chars.push(count.toString()) : "";

            }
            //for pushing the last unique(single occurance) element 

        }

    });

    return chars; // return should be commented in submission 
};


//form community below 80 ms 
var compress = function(chars) {

    if (chars.length == 1) {
        return
    }

    let counter = 1;
    let resultString = ""


    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] == chars[i + 1]) {
            counter++
        } else {
            resultString = resultString + chars[i]
            if (counter > 1) {
                resultString = resultString + counter.toString()
            }
            counter = 1
        }
    }

    resultString = resultString + chars[chars.length - 1]
    if (counter > 1) {
        resultString = resultString + counter.toString()
    }

    // console.log(resultString, resultString[0])

    for (let i = 0; i < chars.length; i++) {
        if (resultString[i]) {
            chars[i] = resultString[i]
        } else {
            chars.splice(i, chars.length - i)
            break;
        }

    }

    // return chars; // should be commented in submission 
};
c(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
c(compress(
    ["a"]));

c(compress(["a", "b", "c"]))