const c = console.log.bind(console);

function showData(name, amt) {
    c(`fuckme with ${name} and fucking amount ${amt}`)
}

function getData(callback) {
    var name = "sakil";
    var amt = 20;
    callback(name, amt);
}

getData(showData);