// https://leetcode.com/problems/goat-latin/submissions/

const c = console.log.bind(console);


//done by me 
var toGoatLatin = function(sentence) {
    const splitedSentence = sentence.split(' ');
    let numberOfa = 2;
    let vowel = 'aeiou';
    // return array;
    const res = splitedSentence.map(item => {
        let __Aarray = new Array(numberOfa).fill("a").join('').split(',').join();
        const fullMaaString = "m" + __Aarray;
        numberOfa++;

        if (vowel.includes(item[0].toLowerCase()) == false) {

            let firstIndexSliced = item.split('').splice(0, 1);
            let splitedItem = item.split('').slice(1).join('').split(',').join();
            let newItem = splitedItem + firstIndexSliced;
            let __res = newItem + fullMaaString;
            return __res;
        } else {
            let __res = item + fullMaaString;
            return __res;
        }



        // c(fullString)

    })
    var result = res.join().split(',').join(' ');
    return result;
};

//simplified solution by discussion community
var toGoatLatin = function(S) {

    let s = S.split(' ');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let ending = 'a';

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].substring(0, 1).toLowerCase())) {
            s[i] += 'ma' + ending;
        } else {
            s[i] = s[i].substring(1, s[i].length) + s[i].substring(0, 1) + 'ma' + ending;
        }
        ending += 'a';
    }

    return s.join(' ');
};

c(toGoatLatin("I speak Goat Latin"));
// c(toGoatLatin("The quick brown fox jumped over the lazy dog"))