const c = console.log.bind(console);

let i = "p";
let item = 'pqppep'
var re = new RegExp(i, '');
let replaceItem = item.replace(re, ""); //returns item = 'qppep'

let replaceItem = item.replace("p", '') //reutnrs item = qppep
let replaceAllItem = item.replaceAll("p", '') //reutnrs item = qe