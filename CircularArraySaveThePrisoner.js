// https://www.hackerrank.com/challenges/save-the-prisoner/problem
// Save the Prisoner!



const c = console.log.bind(console);


//Solution submitted with time complexity error 
function saveThePrisoner(n, m, s) {
    const p = new Array(m).fill(0);
    let number = s;
    p.forEach((item, i) => {

        if (number <= n) {
            p[i] = number;
            number++;
        } else {
            number = 1;
            p[i] = number;
            number++
        }
    })
    return p[p.length - 1];

}


///optimized solution 
function saveThePrisoner(n, m, s) {
    return (m - 1 + s) % n || n;
}


c(saveThePrisoner(4, 7, 3))