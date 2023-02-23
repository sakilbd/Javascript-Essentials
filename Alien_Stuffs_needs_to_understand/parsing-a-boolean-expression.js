// https: //leetcode.com/problems/parsing-a-boolean-expression/description/

//hard porblem .. 
// solved in my way with 78ms but this is interesting solution

const d = console.log.bind(console)

function parseBoolExpr(expr) {
    let idx = 0;

    return (function parse() {
        const c = expr[idx++];
        if (c === 't') {
            return true;
        } else if (c === 'f') {
            return false;
        }

        const values = [];
        while (expr[idx++] !== ')') {
            values.push(parse());
        }

        switch (c) {
            case '|':
                return values.some(Boolean);
            case '&':
                return values.every(Boolean);
            case '!':
                return !values[0];
        }
    })();
}



// c(parseBoolExpr("&(|(f,t),&(f,t))"))
// c(parseBoolExpr("|(f,f,f,t)"))
// c(parseBoolExpr("!(&(f,t))"))
// c(parseBoolExpr("&(|(f))"));

d(parseBoolExpr("&(t,t,t)"))