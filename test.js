const c = console.log.bind(console);

var numSmallerByFrequency = function(queries, words) {
        let wordsLexCount = [];
        words.forEach((item) => {
            let sorted = item
                .split("")
                .sort((a, b) => a.charCodeAt() - b.charCodeAt())
                .join("");

            let replace = sorted[0];
            let re = new RegExp(replace, "g");
            let count = sorted.match(re).length;
            wordsLexCount.push(count);
        });

        wordsLexCount.sort((a, b) => b - a);

        queries.forEach((item) => {
                let sorted = item
                    .split("")
                    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
                    .join("");

                let replace = sorted[0];
                let re = new RegExp(replace, "g");
                let count = sorted.match(re).length;
                c(wordsLexCount.filter();

                    // c(count);
                });

            // return queries;
        };

        c(numSmallerByFrequency(["cbbbd", "cc"], ["a", "aa", "aaa", "aaaa"]));