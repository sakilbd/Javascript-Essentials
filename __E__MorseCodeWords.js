https: //leetcode.com/problems/unique-morse-code-words/
    const c = console.log.bind(console);

var uniqueMorseRepresentations = function(words) {
    let morseMap = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..'
    }
    let wordsMorse = words.map(item => {
        let generateMorse = ''
        for (let i of item) {
            generateMorse += morseMap[i];
        }
        return generateMorse;
    })
    return [...new Set(wordsMorse)].length
};

//array given in problem statement 
let dict = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];



//this is how you can generate the map of morse code if you are too lazy to type manually 
let morseMap = {}
let startingApthaCode = 97;
for (let i = 0; i < dict.length; i++) {
    let alphabate = String.fromCharCode(startingApthaCode);
    morseMap[alphabate] = dict[i];
    startingApthaCode++;
    // c(dict[i])
}
console.log(morseMap)




// c(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
c(uniqueMorseRepresentations(["a"]))