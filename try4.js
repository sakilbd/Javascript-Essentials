import Queue from './queue.js';

const c = console.log.bind(console);



let b = { a: 10, b: 20 }

delete b.a
c(b)