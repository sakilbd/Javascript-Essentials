const c = console.log.bind(console);

function heavyDuty(index) {
    const bigArray = new Array(7000).fill("OhYeah");
    c("created");
    return bigArray[index];
}

function heavyDuty2() {
    const bigArray = new Array(7000).fill("OhYeah");
    c("created Again");
    return function(index) {
        return bigArray[index];
    };
}

c(heavyDuty(986));
c(heavyDuty(986));
c(heavyDuty(986));
c('**********************************')
const getHeavyDuty = heavyDuty2();
c(getHeavyDuty(896));
c(getHeavyDuty(896));
c(getHeavyDuty(896));
c('**********************************')
    // works as regular function call 
c(heavyDuty2()(695));
c(heavyDuty2()(695));
c(heavyDuty2()(695));
c(heavyDuty2()(695));