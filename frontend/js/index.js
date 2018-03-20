// Modules
import {Example} from './modules/example.js';

// CSS
import '../scss/main.scss'

let objects = {
    name : "Sed Accumsan",
    description : "Pellentesque eget nulla a mi commodo vestibulum."
};

let example = new Example(objects);
console.log(example.getName());

const arr = [1,2,3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;