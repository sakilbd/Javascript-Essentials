// https://leetcode.com/problems/capitalize-the-title/description/

const c = console.log.bind(console);


//by me
var capitalizeTitle = function(title) {
    return title.split(' ').map(word => {
        if (word.length <= 2) {
            return word.split('').map(alphabate => alphabate.toLowerCase()).join('');
        } else {
            return word.split('').map((alph, i) => {
                if (i == 0) {
                    return alph.toUpperCase();
                } else {
                    return alph.toLowerCase();
                }
            }).join('')
        }
    }).join(' ')
};


//from community
var capitalizeTitle = function(title) {
    return title.toLowerCase().split(' ').map(val => val.length >= 3 ? val[0].toUpperCase() + val.slice(1) : val).join(' ')
};

c(capitalizeTitle("capiTalIze To tHe titLe"))