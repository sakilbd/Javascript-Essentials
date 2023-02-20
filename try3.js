const c = console.log.bind(console);

var countValidWords = function(sentence) {
    return sentence.split(' ').filter(item => {
        let check = item.split('').every(elem => (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122));
        return item != '' && (check || (
            item.indexOf('.') == (item.length - 1) && check) || (item.indexOf(',') == (item.length - 1) && check))
    }).length
};


var countValidWords = function(sentence) {
    return sentence.split(' ').filter(item => {
        let slicedCheck = item.slice(0, item.length - 1).split('').every(elem => (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122));
        let check = item.split('').every(elem => (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122));

        if (item == '') {
            return false
        }
        if (check) {
            return true;
        }
        if (item.indexOf('.') == (item.length - 1) && slicedCheck) {
            return true;
        }
        if (item.indexOf(',') == (item.length - 1) && slicedCheck) {
            return true;
        }
        if (item.indexOf('.') == (item.length - 1) && slicedCheck) {
            return true;
        }

        if (item.indexOf('-') != -1) {
            if (item.indexOf('-') < item.length - 1) {

                let itemWithotuSpecialCharacter = item.split('-');

                if (itemWithotuSpecialCharacter.length < 3 && itemWithotuSpecialCharacter.join('').split('').every(elem => (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122))) {
                    return true;
                } else {
                    if (itemWithotuSpecialCharacter.join('').split(',').length > 1) {
                        if (itemWithotuSpecialCharacter.join('').indexOf(",") == itemWithotuSpecialCharacter.length - 1) {
                            return true
                        }

                    }
                    if (itemWithotuSpecialCharacter.join('').split('.').length > 1) {
                        if (itemWithotuSpecialCharacter.join('').indexOf(".") == itemWithotuSpecialCharacter.length - 1) {
                            return true
                        }

                    }
                }

            }


        }
    }).length
};

// c("_".charCodeAt());

// c(countValidWords("cat annd, 2. 3. dog-facutly,"));
// c("#################")

// c(countValidWords("!this  1-s b8d!"));

c(countValidWords("alice and  bob are playing stone-game10"))

c(countValidWords("he bo2ught 2 pencils,asdas 3 erasers, and 1  pencil-sharpener-sharpner."))


c(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."))