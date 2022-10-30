const c = console.log.bind(console);

var partitionLabels = function(s) {
    let res = [];


    let temp = '';
    let spliceStartIndex = 0
    for (let i = 0; i < s.length; i++) {
        let split = s.split('');
        let spliced = split.splice(i, i);

        let commonItems = spliced.filter(item => split.includes(item));
        if (commonItems == "") {
            // spliceStartIndex = i;
            res.push(spliced.join(''))
        }
        // c("spliced :" + spliced);
        // c("commonItems :" + commonItems)
        // c("split :" + split);


    }
    return res;
};


c(partitionLabels("ababcbacadefegdehijhklij"));