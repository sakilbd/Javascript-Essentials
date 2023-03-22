const c = console.log.bind(console);


//by me 
var digitSum = function(s, k) {
    let numOfString = s

    while (true) {
        if (numOfString.length <= k) {
            break;
        }
        const regex = new RegExp(`.{1,${k}}`, "g");
        const result = numOfString.match(regex);
        numOfString = result.map(number => {
            let digits = number.split('').reduce((a, b) => parseInt(a) + parseInt(b))
            return digits
        }).join('');

    }
    return numOfString;

};


// from community
var digitSum = function(s, k) {

    while (s.length > k) {
        let temp = ''
        let sum = 0

        for (let i = 0; i < s.length; i++) {
            sum += +s[i]

            if ((i + 1) % k === 0) {
                temp += sum
                sum = 0
            }
        }
        if (s.length % k !== 0)
            temp += sum

        s = temp
    }
    return s

};


c(digitSum("11111222223", 3))