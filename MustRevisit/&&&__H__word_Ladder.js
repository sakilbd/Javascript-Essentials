const c = console.log.bind(console);
https: //leetcode.com/problems/word-ladder-ii/


    //tried by myselft thought was correct but bullshit didnt understand the problem statement fuck me 
    // var findLadders = function(beginWord, endWord, wordList) {
    //     let res = [];

    //     let array = [];
    //     // let dictionary = [...beginWord];
    //     let i = 0;


    //     let stringList = [beginWord]
    //     while (i < wordList.length - 1) {
    //         // c(i)
    //         let j = parseInt(i) + parseInt(1);
    //         // c(j)
    //         // c(wordList[j])
    //         if (wordList[j]) {

    //             // c(i)
    //             let arr1 = wordList[i].split('');
    //             let arr2 = wordList[j].split('');
    //             let difference = arr1.filter(x => !arr2.includes(x));
    //             // c(difference)
    //             if (difference.length == 1) {

    //                 stringList.push(wordList[i]);
    //                 i++;


    //             } else if (difference.length > 1) {
    //                 // c(i)
    //                 stringList.push(wordList[i]);
    //                 stringList.push(endWord);
    //                 array.push(stringList);
    //                 stringList = [beginWord];
    //                 i++;

    //                 // i--;

    //                 // q--;
    //                 // break;
    //             }
    //             if (i == wordList.length - 1) {
    //                 stringList.push(endWord);
    //                 array.push(stringList);
    //                 stringList = [beginWord];
    //             }

    //             // if (difference.length > 1) {
    //             //     stringList.push(endWord);
    //             //     array.push(stringList);
    //             //     stringList = [beginWord];
    //             //     // q--;
    //             //     // break;
    //             // }


    //         }

    //     }
    //     // break;


    //     return array;
    // };



    //found in community and works fine
    var findLadders = function(beginWord, endWord, wordList) {

        let src = new Set([beginWord]);

        let dst = new Set([endWord]);

        const wordSet = new Set(wordList);

        if (!wordSet.has(endWord)) {
            return [];
        }

        wordSet.delete(beginWord);
        wordSet.delete(endWord);
        const from = {};

        const res = [];

        while (src.size > 0 && dst.size > 0) {
            if (src.size > dst.size) {
                [src, dst] = [dst, src];
            }

            const newSet = new Set();

            for (let w of src) {
                const arr = w.split("");

                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < 26; j++) {
                        arr[i] = String.fromCharCode(97 + j);

                        if (arr[i] === w[i]) continue;

                        const newWord = arr.join("");

                        if (dst.has(newWord)) buildPath(w, [w, newWord], newWord, 0);

                        if (wordSet.has(newWord)) {
                            newSet.add(newWord);
                            from[newWord] = from[newWord] || [];
                            from[newWord].push(w);
                        }

                        arr[i] = w[i];
                    }
                }
            }

            if (res.length) return res;

            newSet.forEach((w) => wordSet.delete(w));
            src = newSet;
        }

        return [];

        function buildPath(s, path, d) {
            if (!from[s] && !from[d]) {
                return res.push(path[0] === beginWord ? path.slice() : path.slice().reverse());
            }

            if (from[s]) {
                from[s].forEach((w) => buildPath(w, [w, ...path], d));
            } else {
                from[d].forEach((w) => buildPath(s, [...path, w], w));
            }
        }
    };


c(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))