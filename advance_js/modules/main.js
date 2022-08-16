import {message as msg, user as userDetails, test} from './library.js';

/*
If you want to use/import all variables, Methods and classes of the file than include these like so.
import * as data from './library.js';
Get that data like so
console.log(data.message);
*/
// we can import default function like as
// 1 way
// import {default as func} from './home.js';
// 2 way
// it mean if there any default variable, function or anything, that will be use as 'func'
import func from './home.js';


console.log(msg);
document.body.innerHTML = msg;

console.log(userDetails('Adnan Zaib'));

// Make object of the class
// a = new test();

// Call default function like so
func();